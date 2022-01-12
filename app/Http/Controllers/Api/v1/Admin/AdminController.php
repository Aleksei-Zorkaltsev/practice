<?php

namespace App\Http\Controllers\Api\v1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Designer;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function initFormProduct(){
        $data = [
            'categories' => Category::all(),
            'brands' => Brand::all(),
            'designers' => Designer::all(),
            'user_category' => ['man', 'woman', 'kids']
        ];
        return response()->json($data);
    }

    public function checkAdmin(){
        if (\Auth::user()) {
            $data = [
                'status' => \Auth::user()->is_admin
            ];
        } else {
            $data = [
                'status' => false,
            ];
        }
        return response()->json($data);
    }
}
