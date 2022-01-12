<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\v1\CatalogController as CatalogController;
use App\Http\Controllers\Api\v1\ProductsController as ProductsController;

use App\Http\Controllers\api\v1\Admin\ProductsController as AdminProductsController;
use App\Http\Controllers\Api\v1\Admin\CategoriesController as AdminCategoriesController;
use App\Http\Controllers\Api\v1\Admin\BrandsController as AdminBrandsController;
use App\Http\Controllers\Api\v1\Admin\DesignersController as AdminDesignersController;
use App\Http\Controllers\Api\v1\Admin\AdminController as AdminController;
use App\Http\Controllers\Api\v1\CartController as CartController;
use App\Http\Controllers\Api\v1\OrderController as OrderController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "Api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes();

Route::group(['prefix' => 'admin','middleware' => 'admin'], function(){

    Route::get('init_form_product', [AdminController::class, 'initFormProduct']);
    Route::resource('products', AdminProductsController::class);
    Route::resource('categories', AdminCategoriesController::class);
    Route::resource('brands', AdminBrandsController::class);
    Route::resource('designers', AdminDesignersController::class);
});

Route::get('admin_status', [AdminController::class, 'checkAdmin']);
Route::get('products/{id}', [ProductsController::class, 'show']);

Route::get('catalog/init/{user_category}/{paginate}/{sort}/null/null/null', [CatalogController::class, 'init']);
Route::get('catalog/{user_category}/{paginate}/{sort}/{category_id}/{brand_id}/{designer_id}', [CatalogController::class, 'getCatalogProducts']);

Route::group(['prefix' => 'cart'], function(){
    Route::get('/', [CartController::class, 'index']);
    Route::post('/reset', [CartController::class, 'resetCart']);
    Route::post('/coupon', [CartController::class, 'discount']);

    //переделать под ресурс конетролер CartProductController
    Route::post('/product/add', [CartController::class, 'addToCart']);
    Route::post('/product/update_quantity', [CartController::class, 'updateQuantity']);
    Route::post('/product/remove', [CartController::class, 'deleteCartProduct']);
});

Route::resource('/order', OrderController::class);

//
