<?php
namespace dependencyInjection;

class InstanceMappingOptionsConfiguration {
    private $_mappingOptions;

    public function __construct(MappingOptions $mappingOptions) {
        $this->_mappingOptions = $mappingOptions;
    }
}