<?php

$exportArray = [];

// Properties and constants from this array will be omitted in result array.
// Specify the class name and list of constants or variables from this class
$exceptions = [
    // classname => Array of properties names and constants names
    // App\Models\Property\Property::class => ['addressSelect']
];

// custom classes not from app/Models directory
$customClasses = [
    // \App\Libraries\MailSystem\Mailers\Mailjet\Mailjet::class

];

// add constants/variables from Models classes
foreach (scandir(app_path('Models')) as $className) {
    // dirs with name . or .. will be omitted
    if (in_array($className, ['.', '..'])) {
        continue;
    }

    $className = str_replace('.php', '', "App\Models\\$className");

    generateClassData($exportArray, $exceptions, $className);
}

// add constants/variables from custom classes
foreach ($customClasses as $className) {
    generateClassData($exportArray, $exceptions, $className);
}

// CUSTOM VARIABLES
$exportArray = array_merge($exportArray, [
    // 'customVariable' => 100
]);



return $exportArray;