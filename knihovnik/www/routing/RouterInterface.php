<?php
namespace routing;

interface RouterInterface {
    public function getParameters(string $url): array;
    public function getUrl(array $parameters): string;
}