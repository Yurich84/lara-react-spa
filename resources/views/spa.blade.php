<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name') }}</title>
        <link href="{{ asset('compiled/css/all.css') }}" rel="stylesheet">
        <script>
            window.@include('common-js-variables')
        </script>
    </head>
    <body>
    <div id="root"></div>
    <script src="{{ asset("compiled/js/vendor.js") }}" charset="utf-8"></script>
    <script src="{{ asset("compiled/js/manifest.js") }}" charset="utf-8"></script>
    <script src="{{ asset("compiled/js/app.js") }}" charset="utf-8"></script>
    </body>
</html>
