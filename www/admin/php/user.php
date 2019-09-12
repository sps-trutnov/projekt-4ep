<?php
define("defaultPassword", "heslo");

class User
{
  private $name;
  private $cached;



  function __construct($name)
  {
    $this->name = $name;

    $this->cached = $this->GetData();
  }
/*
  public static function GetEmail($name)
  {
    $return = $name;
    if(strpos($return, '@') === false)
        $return .="@spstrutnov.cz";

    return $return;
  }
*/


  public static function GetAllUserIDs()
  {
    require("./php/dbconn.php");

    $q = $conn->prepare("SELECT id FROM users");
    $q->execute();
    return $q->fetchAll(PDO::FETCH_ASSOC);
  }

  public function GetID()
  {
    require("./php/dbconn.php");

    //$userMail = self::GetEmail($this->name);

    $q = $conn->prepare("SELECT id FROM users WHERE username=:username");
    $q->execute(array("username" => $this->name));

    return $q->fetch(PDO::FETCH_ASSOC)['id'];
  }


  public static function GetAccountTypeStatic($name)
  {
    require( __DIR__ . "/dbconn.php");
    $q = $conn->prepare("SELECT accountType FROM users WHERE username=:username");
    $q->execute(array("username" => $name));
    return $q->fetch()['accountType'];
  }



  // returns all users where firstname, lastname is like something
  public static function GetUsersLike($name)
  {
    require( __DIR__ . "/dbconn.php");
    //SELECT * FROM users WHERE firstname LIKE 'petr' OR lastname LIKE 'Pavlů' OR email LIKE 'ruzicka%'
    $q = $conn->prepare("SELECT username FROM users WHERE firstname LIKE :findN OR lastname LIKE :findN");
    $q->execute(
      array(
       "findN" => ($name. "%")
      )
    );
    $users = array();
    foreach ($q->fetchAll(PDO::FETCH_ASSOC) as $value) {
      array_push($users, new User($value['username']));
    };

    return $users;
  }

  public static function GetAllUsernames()
  {
    require( __DIR__ . "/dbconn.php");
    $q = $conn->prepare("SELECT username FROM users");
    $q->execute();
    return $q->fetchAll(PDO::FETCH_ASSOC);
  }

  // returns all users as User obj
  public static function GetAllUsers()
  {
    require( __DIR__ . "/dbconn.php");

    $users = array();
    foreach (self::GetAllUsernames() as $value) {
      array_push($users, new User($value['username']));
    }
    return $users;
  }


  private function CheckIfCached(){
    if(empty($this->cached) || $this->cached == NULL)
      $this->GetData();
  }

  public function GetFormatName()
  {
      $this->CheckIfCached();
      return $this->cached['firstname'] . " " . $this->cached['lastname'];
  }

  public function GetAccountType()
  {
    $this->CheckIfCached();
    return $this->cached['accountType'];
  }


  public static function GetAccountTypeNameStatic($type)
  {
    switch ($type) {
      case 0: return "Root";
      case 1: return "Knihovník";
      //case 2: return "User";
      default: return "User";
    }
  }

  public function GetAccountTypeName()
  {
    return self::GetAccountTypeNameStatic($this->GetAccountType());
  }

  public function SetNewRole($roleId)
  {
    require( __DIR__ . "/dbconn.php");

    return self::SetNewRoleStatic($this->name, $roleId);
  }

  public static function SetNewRoleStatic($name, $roleId)
  {
    require( __DIR__ . "/dbconn.php");

    $q = $conn->prepare("UPDATE users SET accountType=$roleId WHERE username=:username");
    return $q->execute(
      array("username" => $name)
    );

  }

  public function ChangePassword($newPassword)
  {
    require( __DIR__ . "/dbconn.php");

    $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    $q = $conn->prepare("UPDATE users SET password=:password WHERE username=:username");

    return $q->execute(
      array(
        "password" => $newPassword,
        "username" => $this->name
      )
    );
  }
  public function RemoveUser()
  {
    require( __DIR__ . "/dbconn.php");

    $q = $conn->prepare("DELETE FROM users WHERE username=:username");
    return $q->execute(array("username" => $this->name));
  }

  public static function RegisterUsers($users)
  {
    require( __DIR__ . "/dbconn.php");

    $insertarray = array();
    foreach ($users as $value) {
      if(isset($value[3]))
        $value[3] = password_hash($value[3], PASSWORD_DEFAULT);

      array_push($insertarray, $value);
    }

    $args = array_fill(0, sizeof($insertarray[0]), '?');

    $query = "INSERT INTO users (firstname, lastname, username, password) VALUES(" . implode(',', $args) . ")";
    $prep = $conn->prepare($query);

    foreach ($insertarray as $row) {
      $prep->execute($row);
    }

    return true;

  }

  // get and cache data
  public function GetData()
  {
    require( __DIR__ . "/dbconn.php");

    $q = $conn->prepare("SELECT id,username,firstname,lastname,accountType FROM users WHERE username=:username");

    $q->execute(array("username" => $this->name));
    $this->cached = $q->fetch(PDO::FETCH_ASSOC);
    return $this->cached;
  }





}

?>
