<?php
namespace dependencyInjection;

class MappingOptions {
    public $class;
    public $value;
    public $type;
    public $singletonInstance;

    public function __construct(\ReflectionClass $class) {
        $this->class = $class;
        $this->value = null;
        $this->type = null;
        $this->singletonInstance = null;
    }

    public function getClass(): \ReflectionClass {
        return $this->class;
    }
}