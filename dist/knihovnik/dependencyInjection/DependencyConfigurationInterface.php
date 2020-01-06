<?php
namespace dependencyInjection;

interface DependencyConfigurationInterface {
    public function for(string $className): MappingOptionsConfiguration;
}