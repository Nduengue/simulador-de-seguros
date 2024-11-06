<?php

namespace App\Http\Controllers;

use App\Models\Beneficiarios;
use Illuminate\Http\Request;
use App\Models\UserCoverage;
use App\Models\UserAggravation;
use App\Models\UserPriceDuration;
use App\Http\Controllers\Validation;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Crypt;
use App\Http\Controllers\EnviarEmailControllers;
use App\Http\Controllers\ReceberRelatorioNoSiteControllers;
use Illuminate\Support\Facades\Http;
use function PHPUnit\Framework\isEmpty;
use Barryvdh\DomPDF\Facade\Pdf;


use Carbon\Carbon;

class RegisterSimulationLifeControllers extends Controller
{
    public function SalvarDadosSimulacao(
        Request $request, 
        Validation $validation,
        EnviarEmailControllers  $enviarEmailControllers,
        ApiController $apiController,
        ReceberRelatorioNoSiteControllers  $receberRelatorioNoSiteControllers)
    {
        try {
            
            // Inicializando um array para acumular mensagens de erro
            $dado = []; $rote = "simulation";

            $responseData = $apiController->ApiSimualtionLife($request->all());
            // Verificando se a validação falhou
            if (!$responseData['success']) {   
                return response()->json([
                    'mensagem' => 'erro ao se comunicar com a Api.',
                    'erros' => $responseData
                    ]
                , 500);
            }

            $responseData = $responseData['body'];
            
            // Validação dos dados
            /* $validator = $validation->ValidarDadoSimulacao($dados);
            
            // Verificando se a validação falhou
            if ($validator->fails()) {
                return response()->json([
                    'mensagem' => 'Os dados fornecidos são inválidos preencha bem o formúlario.',
                    'erros' => $validator->errors()
                ], 422);
            } */


            // Chamadas de métodos e verificação de sucesso
            $verificar_insercao = $this->SalvarUserCoverge(
                $request->coverage_ids, 
                $request->insurance_type_id,
                $request->category_id, 
                $request->insurance_id, 
                $request->policy_type_id, 
                $responseData['user']['id']
            );
            if (!$verificar_insercao['success']) {
                $dado[] = $verificar_insercao['mensagem'];
            }
            $verificar_insercao = $this->SalvarUserAgarvation(
                $request->aggravation_ids, 
                $request->insurance_type_id,
                $request->category_id, 
                $request->insurance_id, 
                $request->policy_type_id, 
                $responseData['user']['id']
            );
            if (!$verificar_insercao['success']) {
                $dado[] = $verificar_insercao['mensagem'];
            }
            $user_price_duraction_year =[
                'coverage_value' => $request->coverage_value,
                'coverage_duration' => $request->coverage_duration
            ];
            $verificar_insercao = $this->SalvarUserPrecoDuracao(
                $user_price_duraction_year, 
                $responseData['user']['id']
            );
            if (!$verificar_insercao['success']) {
                $dado[] = $verificar_insercao['mensagem'];
            }
 
           /*  $verificar_insercao = $this->SalvarUserBeneficiario($request->user_beneficiario, 1);
            if (!$verificar_insercao['success']) {
                $dado[] = $verificar_insercao['mensagem'];
            } */

            // Verificação se houve erros acumulados
             if (!empty($dado)) {
                return response()->json(['mensagem' => 'Erros encontrados.', 'erros' => $dado], 400); // Retorna erros acumulados
            } 

            if (empty($request->receberRelatorio)) {
                $pdfContent = $receberRelatorioNoSiteControllers->DomPdf($responseData,$request->coverage_value, $request->coverage_duration);
                return response()->json(['success'=> true ,'mensagem' => 'Dados Salvos com Sucesso!','dados'=>$responseData, 'pdf'=> $pdfContent], 200);
            }else{
                $email = $enviarEmailControllers->EnviarEmail($responseData,$request->receberRelatorio,$request->coverage_value, $request->coverage_duration);
                return response()->json(['success'=> true ,'mensagem' => 'Dados Salvos com Sucesso!','dados'=>$responseData,'email'=>$email], 200);
            }

        } catch (\Throwable $e) {
            // Captura qualquer exceção e retorna mensagem de erro genérica
            return response()->json(['mensagem' => 'Erro ao salvar dados da simulação: ' . $e->getMessage()], 500);
        }
    }

    public function SalvarUserCoverge($data,$insurance_type_id, $category_id, $insurance_id, $policy_type_id, $user_id)
    {
        try {

            $data = is_array($data) ? $data : [$data];
            foreach ($data as $value) {
                $user_coverage = new UserCoverage();
                $user_coverage->user_id = $user_id;
                $user_coverage->covarge_id = $value;
                $user_coverage->category_id = $category_id;
                $user_coverage->insurances_id = $insurance_id;
                $user_coverage->insurance_type_id = $insurance_type_id;
                $user_coverage->policy_type_id = $policy_type_id;
                $user_coverage->save();
            }
            return ['success' => true, 'mensagem' => 'Cobertura salva com sucesso!'];

        } catch (\Throwable $e) {
            return ['success' => false, 'mensagem' => 'Erro ao salvar cobertura: ' . $e->getMessage()];
        }
    }

    public function SalvarUserAgarvation($data,$insurance_type_id, $category_id, $insurance_id, $policy_type_id, $user_id)
    {
        try {
            foreach ($data as $value) {
                $user_agravation = new UserAggravation();
                $user_agravation->user_id = $user_id;
                $user_agravation->aggravation_id = $value;
                $user_agravation->category_id = $category_id;
                $user_agravation->insurances_id = $insurance_id;
                $user_agravation->insurance_type_id = $insurance_type_id;
                $user_agravation->policy_type_id = $policy_type_id;
                $user_agravation->save();
            }
            return ['success' => true, 'mensagem' => 'Agravamento salvo com sucesso!'];

        } catch (\Throwable $e) {
            return ['success' => false, 'mensagem' => 'Erro ao salvar agravamento: ' . $e->getMessage()];
        }
    }

    public function SalvarUserPrecoDuracao($data, $user_id)
    {
        try {
            $user_preco_duracao = new UserPriceDuration();
            $user_preco_duracao->user_id = $user_id;
            $user_preco_duracao->price = $data['coverage_value'];
            $user_preco_duracao->duraction_year = $data['coverage_duration'];
            $user_preco_duracao->save();

            return ['success' => true, 'mensagem' => 'Preço e Duração salvos com sucesso!'];

        } catch (\Throwable $e) {
            return ['success' => false, 'mensagem' => 'Erro ao salvar preço e duração: ' . $e->getMessage()];
        }
    }

    public function SalvarUserBeneficiario($data, $user_id)
    {
        try {
            foreach ($data as $value) {
                $beneficiario = new Beneficiarios();
                $beneficiario->user_id = $user_id;
                $beneficiario->nome = Crypt::encrypt($value['nome']);
                $beneficiario->sobrenome = Crypt::encrypt($value['sobrenome']);
                $beneficiario->sexo = Crypt::encrypt($value['sexo']);
                $beneficiario->data_nascimento = $value['data_nascimento'];
                $beneficiario->save();
            }
            return ['success' => true, 'mensagem' => 'Beneficiário salvo com sucesso!'];

        } catch (\Throwable $e) {
            return ['success' => false, 'mensagem' => 'Erro ao salvar beneficiário: ' . $e->getMessage()];
        }
    }
}

