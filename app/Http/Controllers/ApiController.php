<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller{

    protected $api_url = 'http://192.168.1.99:5008/';
    public function getUsers()
    {
        $users =[
            'nome'=> 'Lopes',
            'sobreNome' => 'Cristovão'
        ];
        $valor = "Exemplo de valor";
        print_r($valor);
        //return response()->json(['data'=>$users]);
    }

    public function getUserById(Request $request)
    {
        $users =[
            'nome'=> $request->nome,
            'sobreNome' => $request->sobrenome
        ];

        if ($users) {
            return response()->json(['data'=> $users]);
        } else {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }
    }

    public function sendData(Request $request)
    {
        // Dados a serem enviados

        //dd($request);        

        $dados = [
            'name' => 'SFFS',
        ];
        $id =[
            'id' =>"Lopes"
        ];

        // Faz uma requisição POST para a API externa
        $response = Http::get('http://192.168.1.99:5005/category', $id);

        // Verifica se a requisição foi bem-sucedida
        if ($response->successful()) {
            dd($response->json());
            // Retorna a resposta da API de destino
            return response()->json([
                'message' => 'Dados enviados com sucesso!',
                'response' => $response->json(), // resposta da API
            ]);

        } else {
            // Lida com o erro da API de destino
            return response()->json([
                'message' => 'Falha ao enviar dados para a API de destino.',
                'error' => $response->body(),
            ], $response->status());
        }
    }

    public function ReceberRelatorio($dados){
        try {
            // Faz uma requisição POST para a API externa
            $response = Http::post('http://192.168.1.99:5005/simulation', $dados->all());
            // Verifica se a requisição foi bem-sucedida
            if ($response->successful()) {
                $responseData = $response->json();
                // Retorna a resposta da API de destino
                Log::info('O controlador foi acessado.'.$responseData['user']);
                Log::info('O controlador foi acessado.'.$$response->body());
                return $responseData;
    
            } else {
                // Lida com o erro da API de destino
                //Log::info('O controlador foi acessado.'. $response->body());
                return response()->json([
                    'message' => 'Falha ao enviar dados para a API de destino.',
                    'error' => $response->body(),
                ], $response->status());
            }

        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function ApiSimualtionLife($dados){
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
    }

    public function ApiSimulater($dados,$rote_life){
        try {
            // Faz uma requisição POST para a API externa
            $response = Http::post($this->api_url.$rote_life, $dados);
            
            // Verifica se a requisição foi bem-sucedida
            if ($response->successful()) {
                if ($response->getStatusCode() !== 204) {  // Evita processar quando não há conteúdo
                    /* Log::info($response->json()); */
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
        catch (\Throwable $e) {
            return [
                'message' => 'Erro ao enviar dados para a API de destino.',
                'error' => $e->getMessage(),
                'status' => 500,
            ];
        }   
    }
    
}

