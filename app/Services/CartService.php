<?php


namespace App\Services;

use App\Models\Cart;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use http\Env\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use mysql_xdevapi\Exception;

class CartService
{

    public function useCoupon($request){

        try {
            $coupon = \DB::table('coupons')->where('code', $request->coupon)->first();

            if(!$coupon){
                return [
                    'status' => false,
                    'message' => 'Coupon code not found.'
                ];
            } else {
                return [
                    'status' => true,
                    'coupon' => $coupon
                ];
            }
        } catch(Exception $exception) {

            return [
                'status' => false,
                'message' => $exception
            ];
        }
    }

    public function changeQuantity($request){
        try {
            \DB::table('cart_list')
                ->where('id', $request->cart_list_item_id)
                ->update([
                    'quantity' => $request->quantity,
                    'updated_at' => date('Y.m.d H:i:s'),
                ]);

            return true;
        } catch (Exception $exception){
            return $exception;
        }
    }

    public function getCart(){
        $user = \Auth::user();
        if($user){
            $cart = Cart::where('user_id', $user->id)->first();
        } else {
            $cart = Cart::where('session_id', Session::getId())->first();
        }

        if(!$cart){
            $newCart = ['session_id' => Session::getId()];
            if($user) {
                $newCart['user_id'] = $user->id;
            }
            $cart = Cart::create($newCart);
        }

        return $cart;
    }

    public function resetCart($id){
        try{
            \DB::table('cart_list')->where('cart_id', $id)->delete();
        } catch (Exception $exception){
            return [
                'status' => false,
                'exception' => $exception
            ];
        }
        return [
            'status' => true,
        ];
    }

    public function getCartId_Products($id){

        $cart_list = \DB::table('cart_list')->where('cart_id', $id)->get();
        $data = null;


        // REWORK THIS SHIT !!!!!!!!!!!!!!! query builder!!!

        foreach($cart_list as $item){
            $colorName = Color::find($item->color_id)->name;
            $size = Size::find($item->size_id)->size;
            $product = Product::find($item->product_id);
            $quantity = $item->quantity;
            $id = $item->id;

            $data[] = [
                'id' => $id,
                'product' => $product,
                'size' => $size,
                'color' => $colorName,
                'quantity' => $quantity
                ]
            ;}

        return $data;
    }

    public function getCartItem($data){

        // REWORK THIS SHIT !!!!!!!!!!!!!!! query builder!!!
        return [
            'id' => \DB::table('cart_list')
                ->where('cart_id', $data['cart_id'])
                ->where('product_id', $data['product_id'])
                ->where('color_id', $data['color_id'])
                ->where('size_id', $data['size_id'])
                ->first()->id,
            'product' => Product::find($data['product_id']),
            'size' => Size::find($data['size_id'])->size,
            'color' => Color::find($data['color_id'])->name,
            'quantity' => $data['quantity'],
        ];
    }

    public function checkProductInCart($cart, $request)
    {
        $result = \DB::table('cart_list')
            ->where('cart_id', $cart->id)
            ->where('product_id', $request->product_id)
            ->where('color_id', $request->color_id)
            ->where('size_id', $request->size_id)
            ->get();

        if($result->count()) {
            return false;
        }
        return true;
    }
}
