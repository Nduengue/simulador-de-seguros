<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\SearchControllers;
use App\Http\Controllers\EnviarEmailControllers;
use App\Http\Controllers\SimulationMtControllers;
use App\Http\Controllers\SimulationLifeControllers;
use App\Http\Controllers\RegisterSimulationLifeControllers;
use App\Http\Controllers\ReceberRelatorioNoSiteControllers;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




/* Routas para inserir dados da simulação vida*/
Route::post('/simulator/life/save',[SimulationLifeControllers::class,'SalvarSimulacaoLife'])->name('salvar_simulacao_life');
/* Routas para inserir dados da simulação fim*/

/* Routas para inserir dados da simulação vida*/
Route::post('/simulator/mt/save',[SimulationMtControllers::class,'SalvarSimulacaoMt'])->name('salvar_simulacao_mt');
/* Routas para inserir dados da simulação fim*/


/* Routas para inserir serch da simulator */
Route::post('/search/simulator',[SearchControllers::class,'SearchSimulator'])->name('search_simulator');
/* Routas para inserir serch da simulator */


/* Routas para inserir selectd all simulator */
Route::post('/selectedAll/simulator',[SearchControllers::class,'SelectedAllSimulator'])->name('selected_all_simulator');
Route::post('/selectedAll/simulator/mt',[SearchControllers::class,'SelectedAllSimulatorAll'])->name('selected_all_simulator');
/* Routas para inserir selectd da simulator */