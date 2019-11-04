<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Models\ProductModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     */
    public function getByCategory(Category $category)
    {
        //
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductModel  $productModel
     * @return \Illuminate\Http\Response
     */
    public function show(ProductModel $productModel)
    {
        return response()->json($productModel);
    }

}
