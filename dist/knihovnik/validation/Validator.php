<?php
namespace validation;

class Validator {
    public static function stringLength(string $string, ?int $minimum, ?int $maximum, array &$errors = [], ?string $tooShortErrorMessage = null, ?string $tooLongErrorMessage = null): bool {
        $stringLength = strlen($string);

        if ($minimum !== null && $stringLength < $minimum) {
            if ($tooShortErrorMessage !== null)
                $errors[] = $tooShortErrorMessage;
            return false;
        }
        else if ($maximum !== null && $stringLength > $maximum) {
            if ($tooLongErrorMessage !== null)
                $errors[] = $tooLongErrorMessage;
            return false;
        }
        else
            return true;
    }

    public static function stringEquivalency(string $string, string $otherString, &$errors = [], string $errorMessage): bool {
        if ($string !== $otherString) {
            $errors[] = $errorMessage;
            return false;
        }
            return true;
    }
}