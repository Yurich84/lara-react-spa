<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing by Category.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     */
    public function getByCategory(Category $category)
    {
        //
    }

    /**
     * Display a listing by Model.
     *
     * @param Model $model
     * @return \Illuminate\Http\Response
     */
    public function getByModel(Model $model)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }

}
