<?php

Route::pattern('id', '\d+');
Route::pattern('slug', '[a-zA-Z0-9-_]+');
Route::pattern('category', '[a-zA-Z0-9-_]+');
Route::pattern('model', '[a-zA-Z0-9-_]+');

Route::group(['prefix' => 'pages'], function () {
    Route::get('/',     'PagesController@index');
    Route::get('{id}',  'PagesController@show');
});

Route::group(['prefix' => 'categories'], function () {
    Route::get('/',         'CategoryController@index');
    Route::get('/{slug}',    'CategoryController@show');
});

Route::group(['prefix' => 'models'], function () {
    Route::get('by_category/{category}',    'ProductModelController@getByCategory');
    Route::get('/{id}',                     'ProductModelController@show');
});

Route::group(['prefix' => 'products'], function () {
    Route::get('by_category/{category}',    'ProductController@getByCategory');
    Route::get('by_model/{model}',          'ProductController@getByModel');
    Route::get('{id}',                      'ProductsController@show');
});