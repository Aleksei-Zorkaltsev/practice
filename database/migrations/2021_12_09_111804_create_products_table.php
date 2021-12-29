<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('img')->nullable();
            $table->float('price', 8, 2);
            $table->text('describes')->nullable();
            $table->bigInteger('brand_id')->unsigned()->nullable();
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('designer_id')->unsigned()->nullable();
            $table->string('material')->nullable();
            $table->enum('user_category', ['man', 'woman', 'kids']);
            $table->timestamps();

            $table->foreign('brand_id')->references('id')->on('brands');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('designer_id')->references('id')->on('designers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
