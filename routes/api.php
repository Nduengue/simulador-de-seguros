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



/** Routas de teste */
Route::get('/users', [ApiController::class, 'getUsers']);
Route::post('/users', [ApiController::class, 'getUserById']);
Route::get('/category', [ApiController::class, 'sendData']);

Route::post('/vida_simuleter', [ApiController::class, 'ReceberRelatorio']);


/** Routa para envio de email */
Route::post('/enviar_email', [EnviarEmailControllers::class, 'EnviarEmail'])->name('enviar.email');
/** Routa para envio de email fim*/


/** Routa para envio de relatorio no site */
Route::post('/enviar_no_site', [ReceberRelatorioNoSiteControllers::class, 'DomPdf'])->name('enviar_no_site');
/** Routa para envio de email fim*/

/* Routas para inserir dados da simulação vida*/
Route::post('/salvar_simulacao',[RegisterSimulationLifeControllers::class,'SalvarDadosSimulacao'])->name('salvar_simulacao');
/* Routas para inserir dados da simulação fim*/



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
Route::post('/selectedAll/simulator/mt',[SearchControllers::class,'SelectedAllSimulatorMt'])->name('selected_all_simulator');
/* Routas para inserir selectd da simulator */