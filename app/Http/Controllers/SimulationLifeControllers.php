<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rate;
use App\Models\Option;
use App\Models\Compania;
use App\Models\Simulation;
use App\Http\Controllers\PdfSiteLifeControllers;

class SimulationLifeControllers extends Controller{
    protected $rote_life_api = "simulator/life/save";
    public $date_error = [];

    public function SalvarSimulacaoLife(
        Request $request,
        ApiController $apiController,
        PdfSiteControllers $pdfSiteLifeControllers, 
        Validation $validation,
        PdfEmailControllers $pdfEmailControllers
        ){
        try {

                $Params = $validation->ValidParamsLife($request->all());
                //verifica se tem parametros faltando
                if (!empty($Params)) {
                    return response()->json([
                        'error' => 'Parâmetros ausentes',
                        'Parametros' => $Params
                    ], 422);
                }

                $validatefields = $validation->ValidFieldsLife($request->all());
                if (!empty($validatefields)) {
                    return response()->json([
                        'error' => 'Campos inválidos',
                        'Campos' => $validatefields
                    ], status: 422);
                }
        
 
                $simulaterLife = $apiController->ApiSimulater($request->all(),$this->rote_life_api);
                
                if(!$simulaterLife['success'] && $simulaterLife['status'] !== 204){
                    return response()->json([
                        'dados'=> $simulaterLife,
                        'message' => 'Erro na simulação da vida.',
                        'error'=> $simulaterLife['error']
                    ] ,500);
                }elseif(!$simulaterLife['success'] && $simulaterLife['status'] === 204){
                    return response()->json([
                        'dados'=> $simulaterLife,
                        'message' => 'Dados da simulação salvos com sucesso & '.$simulaterLife['message']
                    ] ,204);
                }

                $simulater = $this->Simulator($request->all(),$simulaterLife['body'],$validation);
                if(!$simulater['success']){
                    $this->date_error[] = $simulater;
                }

                $compania =$this->Company($request->company_ids,$simulaterLife['body'], $simulater['simulator_id']);
                if(!$compania['success']){
                    $this->date_error[] = $compania;
                }

                $option = $this->Options($simulaterLife['body'],$simulater['simulator_id']);
                if(!$option['success']){
                    $this->date_error[] = $option;
                } 

                if(!empty($this->date_error)){
                    return response()->json([
                        'message' => $this->date_error['error'],
                        'error'=> $this->date_error,
                    ] ,500);
                }
                // main
                $date_params = [
                    "value"=> $request->coverage_value,
                    "duration" => $request->coverage_duration,
                    "body"=> $simulaterLife['body'],
                ];

               if($request->receber === "site"){
                $date_pdf_site_life = $pdfSiteLifeControllers->PdfSiteLife($date_params);
                return response()->json(['success'=> true ,'mensage' => 'Dados da simulação Life salvos com sucesso!', 'pdf'=> $date_pdf_site_life], 200);
               }else if($request->receber === "email"){
                $date_pdf_email_life = $pdfEmailControllers->PdfEmailLife($date_params);
                return response()->json(['success'=> true ,'mensage' => 'Dados da simulação Life salvos com sucesso!','dados'=>$simulaterLife ,'email'=> $date_pdf_email_life], 200);
               }
        }catch (\Throwable $th) {
            return response()->json([
                'message' => 'Erro na simulação Life',
                'erros' => $th->getMessage()
            ], 500);
        }
    }   

    public function Simulator($dados_simulater,$user_id,$validation){
        try {

            $user_id = $user_id['user']['id'];
            $codigo = $validation->gerarCodigoSimulacao();

            $simulator = new Simulation();
            $simulator->user_id = $user_id;
            $simulator->value = $dados_simulater['coverage_value'];
            $simulator->duraction = $dados_simulater['coverage_duration'];
            $simulator->category_id = $dados_simulater['category_id'];
            $simulator->insurance_id = $dados_simulater['insurance_id'];
            $simulator->innsurance_type_id = $dados_simulater['insurance_type_id'];
            $simulator->polici_type_id = $dados_simulater['policy_type_id'];
            $simulator->origin = "";
            $simulator->destination = "";
            $simulator->receber = $dados_simulater['receber'];
            $simulator->codigo = $codigo;

            $simulator->save();
    
            return [
                'success' => true,
                'simulator_id' => $simulator->id
            ];          

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'erro ao salvar dados da simulation.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    public function Company($data, $corpo, $simulation_id){
        try {

            foreach ($data as $index => $value) {

                $company = new Compania();
                $company->simulation_id = $simulation_id;
                $company->company_id = $value;
                
                $company->save();
                $this->Rates($corpo, $company->id, $index);
            }
            return['success' => true,];

        } catch (\Throwable $e) {
            return[
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $e->getMessage()
            ];
        }   
    }
    public function Rates($data, $company_id, $controlador){
        try {
            
            foreach ($data['company_simulations'] as $index => $simulation) {
               
                if ($index === $controlador) {

                    foreach ($simulation['coverages_rates']['rates'] as $value) {
                        $rate = new Rate();
                        $rate->compania_id = $company_id;
                        $rate->rate_id = $value['id'];
                        $rate->group_id = $simulation['coverages_rates']['option_group_id'];
                        $rate->save();
                    }
                    foreach ($simulation['aggravations_rates']['rates'] as $value) {
                        $rate = new Rate();
                        $rate->compania_id = $company_id;
                        $rate->rate_id = $value['id'];
                        $rate->group_id = $simulation['aggravations_rates']['option_group_id'];
                        $rate->save();
                    }
                    break; 
                }
            }

         } catch (\Throwable $e) {
            return[
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $e->getMessage()
            ];
        }   
    }
    public function Options($data, $simulation_id,){
        try {     
                
                foreach ($data['coverages']['options'] as $value) {
                    $option_coverages = new Option();
                    $option_coverages->simulation_id = $simulation_id;
                    $option_coverages->option_id = $value['id'];
                    $option_coverages->option_group_id = $data['coverages']['option_group_id'];
                    $option_coverages->save();
                }
                foreach ($data['aggravations']['options'] as $value) {
                    $option_aggravations = new Option();
                    $option_aggravations->simulation_id = $simulation_id;
                    $option_aggravations->option_id = $value['id'];
                    $option_aggravations->option_group_id = $data['aggravations']['option_group_id'];
                    $option_aggravations->save();
                }
                 return['success' => true,];

        } catch (\Throwable $e) {
            return[
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Option',
                'erros' => $e->getMessage()
            ];
        }
    }
}
