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
            $table->decimal('value', 40, 2);
            $table->integer('duraction')->nullable();
            $table->integer('category_id');
            $table->integer('insurance_id');
            $table->integer('innsurance_type_id');
            $table->integer('polici_type_id');
            $table->string('origin')->nullable();
            $table->string('destination')->nullable();
            $table->string('receber');
            $table->integer('codigo');

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
