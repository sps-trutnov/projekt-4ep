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

  public static function GetEmail($name)
  {
    $return = $name;
    if(strpos($return, '@') === false)
        $return .="@spstrutnov.cz";

    return $return;
  }

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

    $userMail = self::GetEmail($this->name);

    $q = $conn->prepare("SELECT id FROM users WHERE email=:email");
    $q->execute(array("email" => $userMail));

    return $q->fetch(PDO::FETCH_ASSOC)['id'];
  }


  public static function GetAccountTypeStatic($email)
  {
    require( __DIR__ . "/dbconn.php");
    $q = $conn->prepare("SELECT accountType FROM users WHERE email=:email");
    $q->execute(array("email" => $email));
    return $q->fetch()['accountType'];
  }
  public static function GetAllUserEmails()
  {
    require( __DIR__ . "/dbconn.php");
    $q = $conn->prepare("SELECT email FROM users");
    $q->execute();
    return $q->fetchAll(PDO::FETCH_ASSOC);
  }

  // returns all users where firstname, lastname is like something
  public static function GetUsersLike($name)
  {
    require( __DIR__ . "/dbconn.php");
    //SELECT * FROM users WHERE firstname LIKE 'petr' OR lastname LIKE 'Pavlů' OR email LIKE 'ruzicka%'
    $q = $conn->prepare("SELECT email FROM users WHERE firstname LIKE :findN OR lastname LIKE :findN");
    $q->execute(
      array(
       "findN" => ($name. "%")
      )
    );
    $users = array();
    foreach ($q->fetchAll(PDO::FETCH_ASSOC) as $value) {
      array_push($users, new User($value['email']));
    };

    return $users;
  }

  // returns all users as User obj
  public static function GetAllUsers()
  {
    require( __DIR__ . "/dbconn.php");

    $users = array();
    foreach (self::GetAllUserEmails() as $value) {
      array_push($users, new User($value['email']));
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

  public static function SetNewRoleStatic($mail, $roleId)
  {
    require( __DIR__ . "/dbconn.php");
    $email = self::GetEmail($mail);

    $q = $conn->prepare("UPDATE users SET accountType=$roleId WHERE email=:email");
    return $q->execute(
      array("email" => $email)
    );

  }

  public function ChangePassword($newPassword)
  {
    require( __DIR__ . "/dbconn.php");

    $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    $q = $conn->prepare("UPDATE users SET password=:password WHERE email=:email");

    return $q->execute(
      array(
        "password" => $newPassword,
        "email" => self::GetEmail($this->name)
      )
    );
  }
  public function RemoveUser()
  {
    require( __DIR__ . "/dbconn.php");

    $q = $conn->prepare("DELETE FROM users WHERE email=:email");
    return $q->execute(array("email" => self::GetEmail($this->name)));
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

    $query = "INSERT INTO users (firstname, lastname, email, password) VALUES(" . implode(',', $args) . ")";
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

    $userMail = self::GetEmail($this->name);

    $q = $conn->prepare("SELECT id,email,firstname,lastname,accountType FROM users WHERE email=:email");

    $q->execute(array("email" => $userMail));
    $this->cached = $q->fetch(PDO::FETCH_ASSOC);
    return $this->cached;
  }





}

?>
