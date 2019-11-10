<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];



    /********************************************
     *          Relations
     */

    public function children() : BelongsToMany
    {
        return $this->belongsToMany(self::class, 'cat_parent', 'parent_id', 'category_id');
    }

    public function models() : BelongsToMany
    {
        return $this->belongsToMany(
            ProductModel::class,
            'model_category',
            'category_id',
            'model_id'
        );
    }

}
