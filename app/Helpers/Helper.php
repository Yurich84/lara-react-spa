<?php

/**
 * Make an array of class constants and variables for passing in JS
 */
if (!function_exists('generateClassData')) {

    function generateClassData(&$exportArray, array $exceptions, $className)
    {
        if (!class_exists($className)) {
            return;
        }

        $reflectionClass = new \ReflectionClass($className);

        if ($reflectionClass->getParentClass()) {
            $constants = array_diff($reflectionClass->getConstants(), $reflectionClass->getParentClass()->getConstants());
        } else {
            $constants = $reflectionClass->getConstants();
        }

        // search for class constants
        foreach ($constants as $constantName => $constantValue) {

            // search in exceptions array
            if (isset($exceptions[$className]) && in_array($constantName, $exceptions[$className])) {
                continue;
            }

            $exportArray[$reflectionClass->getShortName()][$constantName] = $constantValue;
        }

    }
}
