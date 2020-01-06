<?php
namespace dependencyInjection;

abstract class MappingType {
    const TransientClass = 0;
    const SingletonClass = 1;
    const SingletonInstance = 2;

    private function __construct() { }
}