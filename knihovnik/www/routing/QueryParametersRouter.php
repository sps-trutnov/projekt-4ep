<?php
namespace routing;

class QueryParametersRouter implements RouterInterface {
    private $_baseUrl;
    private $_defaultParameters;

    public function __construct(string $baseUrl, array $defaultParameters) {
        $this->_baseUrl = $baseUrl;
        $this->_defaultParameters = $defaultParameters;
    }

    public function getParameters(string $url): array {
        $parsedUrl = parse_url($url);

        if (!array_key_exists("query", $parsedUrl))
            return $this->_defaultParameters;

        parse_str($parsedUrl["query"], $parameters);

        foreach ($this->_defaultParameters as $key => $value) {
            if(!array_key_exists($key, $parameters))
                $parameters[$key] = $value;
        }

        return $parameters;
    }

    public function getUrl(array $parameters): string {
        return $this->_baseUrl . "?" . http_build_query($parameters);
    }
}