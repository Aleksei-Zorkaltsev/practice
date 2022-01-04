<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function show($id)
    {
        $product = \DB::table('products')
            ->join('brands', 'products.brand_id', '=', 'brands.id')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('designers', 'products.designer_id', '=', 'designers.id')
            ->select('products.product_name as product_name',
                'products.price as price',
                'products.description as description',
                'products.material as material',
                'products.img as img',
                'products.user_category as user_category',
                'brands.name as brand',
                'categories.name as category',
                'designers.name as designer')
            ->where('products.id', '=', $id)
            ->get();

        if($product->isEmpty()){
            return response()->json([
                'error' => 'product not found'
            ]);
        }

        $data = [
            'product' => $product,
            'colors' => \DB::table('colors')->select('id', 'name', 'color_code')->get(),
            'sizes' => \DB::table('sizes')->select('size')->get(),
        ];
        return response()->json($data);
    }
}
