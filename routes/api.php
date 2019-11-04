<?php

Route::group(['prefix' => 'pages'], function () {
    Route::get('/',     'PagesController@index');
    Route::get('{id}',  'PagesController@show');
});

Route::group(['prefix' => 'categories'], function () {
    Route::get('/',     'CategoryController@index');
    Route::get('{slug}',  'CategoryController@show');
});

Route::group(['prefix' => 'models'], function () {
    Route::get('/{category}',  'ProductModelsController@getByCategory');
    Route::get('{id}',          'ProductModelsController@show');
});

Route::group(['prefix' => 'products'], function () {
    Route::get('/{category}',  'ProductModelsController@getByCategory');
    Route::get('/{model}',     'ProductModelsController@getByModel');
    Route::get('{id}',          'ProductsController@show');
});