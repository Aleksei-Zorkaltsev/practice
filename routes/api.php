<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\v1\ProductsController as ProductsController;
use App\Http\Controllers\Api\v1\CatalogController as CatalogController;
use App\Http\Controllers\Api\v1\CategoriesController as CategoriesController;
use App\Http\Controllers\Auth\RegisterController as RegisterController;
use App\Http\Controllers\Auth\LoginController as LoginController;
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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    var_dump($request);
    return $request->user();
});

Auth::routes();

Route::get('catalog/init/{user_category}/{paginate}/{sort}/null/null/null', [CatalogController::class, 'init']);
Route::get('catalog/{user_category}/{paginate}/{sort}/{category_id}/{brand_id}/{designer_id}', [CatalogController::class, 'getCatalogProducts']);

Route::resource('products', ProductsController::class);
Route::resource('categories', CategoriesController::class);
