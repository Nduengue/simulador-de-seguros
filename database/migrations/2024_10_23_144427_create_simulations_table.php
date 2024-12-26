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
        Schema::create('simulations', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->decimal('value', 40, 2)->nullable();
            $table->integer('duraction')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('insurance_id')->nullable();
            $table->integer('innsurance_type_id')->nullable();
            $table->integer('polici_type_id')->nullable();
            $table->string('origin')->nullable();
            $table->string('destination')->nullable();
            $table->string('receber')->nullable();
            $table->integer('codigo')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('simulations');
    }
};
