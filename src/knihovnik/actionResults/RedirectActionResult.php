<?php
namespace actionResults;

class RedirectActionResult implements ActionResultInterface {
    private $_url;

    public function __construct(string $url) {
        $this->_url = $url;
    }
    
    public function process() {
        header("Location: $this->_url");
        exit;
    }
}