<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Designer;
use App\Models\Product;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function getCatalogProducts($user_category, $paginate, $sortType, $category_id, $brand_id, $designer_id)
    {
        $data = Product::where('user_category', $user_category)
            ->when(($category_id !== 'null'), function ($query) use ($category_id){
                return $query->where('category_id', $category_id);
            })
            ->when(($brand_id !== 'null'), function ($query) use ($brand_id){
                return $query->where('brand_id', $brand_id);
            })
            ->when(($designer_id !== 'null'), function ($query) use ($designer_id){
                return $query->where('designer_id', $designer_id);
            })
            ->orderBy($sortType)
            ->paginate($paginate);

        return response()->json($data);
    }

    public function init($user_category, $paginate, $sortType){

        $data = [
            'products' => Product::where('user_category', $user_category)->orderBy($sortType)->paginate($paginate),
            'filterProperty' => [
                'categories' => Category::all(),
                'brands' => Brand::all(),
                'designers' => Designer::all(),
            ],
        ];

        return response()->json($data);
    }
}
