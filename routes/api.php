<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\v1\ProductsController as ProductsController;
use App\Http\Controllers\Api\v1\CatalogController as CatalogController;
use App\Http\Controllers\Api\v1\CategoriesController as CategoriesController;
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

Route::get('catalog/init/{user_category}/{paginate}/{sort}', [CatalogController::class, 'init']);
Route::get('catalog/{user_category}/{paginate}/{sort}/{category_id}/{brand_id}/{designer_id}', [CatalogController::class, 'getCatalogProducts']);

Route::resource('products', ProductsController::class);
Route::resource('categories', CategoriesController::class);
