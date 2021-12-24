<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Designer;
use Illuminate\Http\Request;

use App\Models\Product;


class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * return JSON
     */
    public function index()
    {
        $data = Product::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        $product = Product::find($id);
//        $data = [
//            'product' => $product,
//            'category' => Category::find($product->brand_id),
//            'brand' => Brand::find($product->category_id),
//            'designer' => Designer::find($product->designer_id),
//        ];

        $data = \DB::table('products')
            ->join('brands', 'products.brand_id', '=', 'brands.id')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('designers', 'products.designer_id', '=', 'designers.id')
            ->select(
                'products.product_name as product_name',
                'products.price as price',
//                'products.describe as describe',
//                'products.material as material',
                'products.img as img',
                'products.user_category as user_category',
                'brands.name as brand',
                'categories.name as category',
                'designers.name as designer')
            ->where('products.id', '=', $id)
            ->get();

        return response()->json($data[0]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
