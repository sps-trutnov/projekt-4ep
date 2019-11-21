<?php
namespace dependencyInjection;

class DependencyContainer implements DependencyProviderInterface, DependencyConfigurationInterface {
    private $_mappingsOptions;

    public function __construct() {
        $this->_mappingsOptions = [];
    }

    public function for(string $className): MappingOptionsConfiguration {
        $class = new \ReflectionClass($className);
        $mappingOptions = $this->getMappingOptions($class);
        if ($mappingOptions === null) {
            $mappingOptions = new MappingOptions($class);
            $this->_mappingsOptions[] = $mappingOptions;
        }
        return new MappingOptionsConfiguration($mappingOptions);
    }

    private function getMappingOptions(\ReflectionClass $class) {
        foreach ($this->_mappingsOptions as $mappingOptions) {
            if($mappingOptions->getClass() == $class)
                return $mappingOptions;
        }
        return null;
    }

    public function provide(string $className) {
        return $this->_provide(new \ReflectionClass($className), []);
    }

    private function _provide(\ReflectionClass $class, array $used) {
        $className = $class->getName();
        if (in_array($class, $used))
            throw new \Exception("Cannot resolve class '$className', circular dependency detected.");
        $used[] = $class;

        $requiredClass = $class;

        $appropriateMapping = $this->getMappingOptions($class);
        if ($appropriateMapping !== null) {
            if ($appropriateMapping->type === MappingType::SingletonInstance)
                return $appropriateMapping->value;
            else if ($appropriateMapping->type === MappingType::SingletonClass && $appropriateMapping->singletonInstance !== null)
                return $appropriateMapping->singletonInstance;
            else if ($appropriateMapping->type === MappingType::TransientClass || $appropriateMapping->type === MappingType::SingletonClass)
                $requiredClass = $appropriateMapping->value;
        }

        $constructor = $requiredClass->getConstructor();
        $constructorParameters = $constructor !== null ? $constructor->getParameters() : [];
        $constructorArguments = [];

        foreach ($constructorParameters as $parameter) {
            $parameterName = $parameter->getName();
            $parameterClass = $parameter->getClass();
            if ($parameterClass === null)
                throw new Exception("Can not resolve constructor parameter '$parameterName'. It has not declared type or it is builtin.");
            $constructorArguments[] = $this->_provide($parameterClass, $used);
        }
        $requiredClassInstance = $requiredClass->newInstanceArgs($constructorArguments);
        if ($appropriateMapping !== null && $appropriateMapping->type === MappingType::SingletonClass)
            $appropriateMapping->singletonInstance = $requiredClassInstance;
        return $requiredClassInstance;
    }
}