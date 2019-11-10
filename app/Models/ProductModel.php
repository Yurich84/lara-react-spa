<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductModel extends Model
{
    protected $table = 'models';
    public $timestamps = false;
    protected $guarded = ['id'];



    /********************************************
     *          Relations
     */

    public function products() : HasMany
    {
        return $this->hasMany(Product::class, 'model_id');
    }
}
