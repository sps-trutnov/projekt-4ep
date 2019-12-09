<?php
namespace dependencyInjection;

class ClassMappingOptionsConfiguration {
    private $_mappingOptions;

    public function __construct(MappingOptions $mappingOptions) {
        $this->_mappingOptions = $mappingOptions;
    }

    public function asTransient() {
        $this->_mappingOptions->type = MappingType::TransientClass;
    }

    public function asSingleton() {
        $this->_mappingOptions->type = MappingType::SingletonClass;
    }
}