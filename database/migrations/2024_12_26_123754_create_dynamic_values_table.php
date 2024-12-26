<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dynamic_values', function (Blueprint $table) {
            $table->id();
            $table->string('value')->nullable();
            $table->string('description')->nullable();
            
            $table->unsignedBigInteger('simulation_id');
            $table->foreign('simulation_id')->references('id')->on('simulations')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dynamic_values');
    }
};
