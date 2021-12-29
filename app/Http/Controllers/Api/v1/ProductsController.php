<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Designer;
use Illuminate\Http\Request;

use App\Models\Product;
use Illuminate\Support\Facades\Validator;


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

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),[
                'product_name' => ['required'],
                "category_id" => ['required'],
                "brand_id" => ['required'],
                "designer_id" => ['required'],
                "price" => ['required'],
                "material" => [],
            ]
        );

        if($validator->fails()){
            $answer = [
                "status" => false,
                "message" => $validator->messages(),
            ];
            return response()->json($answer);
        }

        $product = Product::create([
                "category_id" => $request->category_id,
                "brand_id" => $request->brand_id,
                "designer_id" => $request->designer_id,
                "describes" => $request->describes,
                "user_category" => $request->user_category,
                "price" => $request->price,
                "product_name" => $request->product_name,
                "material" => $request->material,
                "img" => $request->img
        ]);
        $answer = [
            "status" => "true",
            "product" => $product
        ];
        return response()->json($answer);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = \DB::table('products')
            ->join('brands', 'products.brand_id', '=', 'brands.id')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('designers', 'products.designer_id', '=', 'designers.id')
            ->select(
                'products.product_name as product_name',
                'products.price as price',
                'products.describes as describe',
                'products.material as material',
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
