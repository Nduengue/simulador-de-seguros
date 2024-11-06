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
        Schema::create('user_coverages', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->integer('covarge_id');
            $table->integer('category_id');
            $table->integer('insurances_id');
            $table->integer('insurance_type_id');
            $table->integer('policy_type_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_coverages');
    }
};
