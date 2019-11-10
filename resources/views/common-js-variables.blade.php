{{--{!! dd(session()->all()) !!}--}}
Laravel = {!! json_encode([
    'csrfToken' => csrf_token(),
    'appName' => config('app.name'),
    'address' => config('app.address'),
    'zip' => config('app.zip'),
    'phone' => config('app.phone'),
    'appUrl' => config('app.url'),
    'appDebug' => config('app.debug')
]) !!};
