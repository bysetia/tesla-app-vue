<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Auth\LoginController;
use Fruitcake\Cors\HandleCors;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
    
Route::get('categories', [CategoryController::class, 'index']);

Route::post('add/category', [CategoryController::class, 'store']);

Route::get('delete/category/{id}', [CategoryController::class, 'destroy']);

Route::post('update/category/{id}', [CategoryController::class, 'update']);

Route::post('add/product', [ProductController::class, 'store']);

Route::get('products', [ProductController::class, 'index']);

Route::get('delete/product/{id}', [ProductController::class, 'destroy']);

Route::post('update/product/{id}', [ProductController::class, 'update']);

Route::get('latestProducts',[ProductController::class, 'latestProducts']);

