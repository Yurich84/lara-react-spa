<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body>

    <h1 class="text-center mt-5">Searching Properties</h1>

    <main role="main" class="container">
        <div class="row justify-content-lg-center">
            <div class="col-lg-auto mt-5">
                <div id="root"></div>
            </div>
        </div>
    </main>

    <script src="{{ asset("js/app.js") }}" charset="utf-8"></script>


    </body>
</html>
