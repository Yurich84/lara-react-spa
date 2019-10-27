<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\PropertyRequest;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class PropertyC extends Controller
{

    public function start_params()
    {
        return response()->json(DB::table('properties')
        ->selectRaw('
            MIN(price) as min_price, 
            MAX(price) as max_price, 
            MAX(bedrooms) as max_bedrooms,
            MAX(bathrooms) as max_bathrooms,
            MAX(storeys) as max_storeys,
            MAX(garages) as max_garages
            ')
        ->first());
    }


    public function search(Request $request)
    {

        return Property::oldest('name')
            ->whereBetween('price', [$request->min_price, $request->max_price])

        ->when(($request->filled('name')), function($query) use($request) {
            $query->where('name', 'like', '%'.$request->name.'%');
        })
        ->when(($request->has('bedrooms') && $request->bedrooms > 0), function($query) use($request) {
            $query->where('bedrooms', $request->bedrooms);
        })
        ->when(($request->has('bathrooms') && $request->bathrooms > 0), function($query) use($request) {
            $query->where('bathrooms', $request->bathrooms);
        })
        ->when(($request->has('storeys') && $request->storeys > 0), function($query) use($request) {
            $query->where('storeys', $request->storeys);
        })
        ->when(($request->has('garages') && $request->garages > 0), function($query) use($request) {
            $query->where('garages', $request->garages);
        })
        ->get();

    }

}
