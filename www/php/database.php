<?php
class database{
    private $host = "localhost";    
    private $user = "hanusj"; 
    private $pass = "heslo123"; 
    private $db = "5ep_hanusj"; 
    public $mysqli;
  
    public function __construct() {
      $this->db_connect();
    }
  
    private function db_connect(){      
      $this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);
      return $this->mysqli;
    }
  
    public function query($sql){
          $result = $this->mysqli->query($sql);
          return $result;
    }

    public function close(){
        $this->mysqli->close();
    }
}
  