<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\rotaApiControllers;

class ApiController extends Controller{

    /* protected $api_url = 'http://192.168.1.99:5008/'; */
    //protected $api_url = 'http://api-simulator.mtapp.ao/';
    protected $api_url = 'https://api-simulator.mtapp.ao/';
   
   /*  public function ApiSimualtionLife($dados){
        try {
            // Faz uma requisição POST para a API externa
            $response = Http::post('http://192.168.1.99:5005/simulation', $dados);
            
            // Verifica se a requisição foi bem-sucedida
            if ($response->successful()) {
                if ($response->getStatusCode() !== 204) {  // Evita processar quando não há conteúdo
                    return [
                        'success' => true,
                        'status' => $response->status(),
                        'body'=>$response->json()];
                } else {
                    // Lida com a situação onde 204 é retornado (nenhum conteúdo)
                    return [
                        'success' => false,
                        'message' => 'Nenhum conteúdo retornado pela API de destino.',
                        'status' => 204,
                    ];
                }
            } else {
                return [
                    'success' => false,
                    'message' => 'Falha ao enviar dados para a API de destino.',
                    'error' => $response->body(),
                    'status' => response()->status(),
                ];
            }
        }
        catch (\Throwable $th) {
            return [
                'message' => 'Erro ao enviar dados para a API de destino.',
                'error' => $th->getMessage(),
                'status' => 500,
            ];
        }   
    } */

    public function ApiSimulater($dados,$rote_life){
        try {
            $rotaApiControllers =  rotaApiControllers::getUrl();
            
            // Faz uma requisição POST para a API externa
            $response = Http::post($rotaApiControllers.$rote_life, $dados);
            
            // Verifica se a requisição foi bem-sucedida
            if ($response->successful()) {
                if ($response->getStatusCode() !== 204) {  

                    return [
                        'success' => true,
                        'status' => $response->status(),
                        'body'=>$response->json()];
                } else {
                    return [
                        'success' => false,
                        'message' => 'Nenhum conteúdo retornado pela API de destino.',
                        'status' => 204,
                    ];
                }
            } else {
                return [
                    'success' => false,
                    'message' => 'Falha ao enviar dados para a API de destino.',
                    'error' => $response->body(),
                    'status' => $response->status(),
                ];
            }
        }
        catch (\Throwable $e) {
            return [
                'message' => 'Erro ao enviar dados para a API de destino.',
                'error' => $e->getMessage(),
                'status' => 500,
            ];
        }   
    }    
}

