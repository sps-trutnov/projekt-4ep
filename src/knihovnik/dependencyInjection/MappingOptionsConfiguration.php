<?php
namespace dependencyInjection;

class MappingOptionsConfiguration {
    private $_mappingOptions;

    public function __construct(MappingOptions $mappingOptions) {
        $this->_mappingOptions = $mappingOptions;
    }

    public function useInstance($instance): InstanceMappingOptionsConfiguration {
        $this->_mappingOptions->type = MappingType::SingletonInstance;
        $this->_mappingOptions->value = $instance;
        return new InstanceMappingOptionsConfiguration($this->_mappingOptions);
    }

    public function useClass($className): ClassMappingOptionsConfiguration {
        $this->_mappingOptions->type = MappingType::TransientClass;
        $this->_mappingOptions->value = new \ReflectionClass($className);
        return new ClassMappingOptionsConfiguration($this->_mappingOptions);
    }
}