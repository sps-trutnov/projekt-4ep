<?php
namespace dependencyInjection;

interface DependencyProviderInterface {
    public function provide(string $className);
}