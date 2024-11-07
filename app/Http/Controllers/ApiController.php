<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\rotaApi;

class ApiController extends Controller{

    public function ApiSimulater($dados,$rote_life){
        try {
            $rotaApiControllers =  env('API_URL');
            
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

