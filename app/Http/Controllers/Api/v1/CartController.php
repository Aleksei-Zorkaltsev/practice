<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use \App\Services\CartService;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

class CartController extends Controller
{
    public function index(){
        $cartService = new CartService();
        $cart = $cartService->getCart();
        $data = $cartService->getCartId_Products($cart->id);

        return response()->json($data);
    }

    public function deleteCartProduct(Request $request){
        try{
            \DB::table('cart_list')->where('id', $request->id)->delete();
        } catch (Exception $exception){
            return response()->json([
                'status' => false,
                'exception' => $exception
            ]);
        }
        return response()->json([
            'status' => true,
        ]);
    }

    public function updateQuantity(Request $request){

        $validator = Validator::make($request->all(), [
            'cart_list_item_id' => ['required'],
            'quantity' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => $validator->messages()
            ]);
        }

        $cartService = new CartService();
        $result = $cartService->changeQuantity($request);
        if($result !== true){
            return response()->json([
                'status' => false,
                'message' => $result
            ]);
        }

        return response()->json([
            'status' => true
        ]);
    }

    public function addToCart(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_id' => ['required'],
            'size_id' => ['required'],
            'color_id' => ['required'],
            'quantity' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => $validator->messages()
            ]);
        }

        $cartService = new CartService();
        $cart = $cartService->getCart();
        $check = $cartService->checkProductInCart($cart, $request);

        if(!$check){
            return response()->json([
                'status' => false,
                'message' => 'Product already in cart'
            ]);
        }

        $data = [
            'cart_id' => $cart->id,
            'product_id' => $request->product_id,
            'size_id' => $request->size_id,
            'color_id' => $request->color_id,
            'quantity' => $request->quantity
        ];

        try {
            \DB::table('cart_list')->insert($data);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => 'Errors to add in DB',
                'exception' => $exception
            ]);
        }

        return response()->json([
            'status' => true,
            'product' => $cartService->productData($data)
        ]);
    }
}
