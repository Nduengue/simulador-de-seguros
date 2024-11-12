<?php

namespace App\Http\Controllers;

use Log;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Simulation;
use App\Models\Option;
use App\Models\Option_Option;
use App\Models\Compania;
use App\Models\Rate;

class SimulationMtControllers extends Controller
{
    protected $rote_mt_api = "simulator/mt/save";
    public $date_error = [];

    public function SalvarSimulacaoMt(
        Request $request, ApiController $apiController,
        Validation $validation,
        PdfSiteControllers $pdfSiteControllers,
        PdfEmailControllers $pdfEmailControllers
        )
    {

        try {
            $Params = $validation->ValidParamsMt($request->all());

            //verifica se tem parametros faltando
            if (!empty($Params)) {
                return response()->json([
                    'error' => 'Parâmetros ausentes',
                    'Parametros' => $Params
                ], 422);
            }

            $simulater_mt = $apiController->ApiSimulater($request->all(), $this->rote_mt_api);

            if (!$simulater_mt['success'] && $simulater_mt['status'] !== 204) {
                return response()->json([
                    'dados' => $simulater_mt,
                    'message' => 'Erro na simulação da vida.',
                    'error' => $simulater_mt['error']
                ], 500);
            } elseif (!$simulater_mt['success'] && $simulater_mt['status'] === 204) {
                return response()->json([
                    'dados' => $simulater_mt,
                    'message' => 'Dados da simulação salvos com sucesso & ' . $simulater_mt['message']
                ], 204);
            }


            $simulater = $this->Simulater($request->all(), $simulater_mt['body']['user']);
            if (!$simulater['success']) {
                $this->date_error[] = $simulater;
            }

            $compania = $this->Company($request->company_ids, $simulater_mt['body'], $simulater['simulator_id']);
            if (!$compania['success']) {
                $this->date_error[] = $compania;
            }

            $option = $this->Options($simulater_mt['body'], $simulater['simulator_id']);
            if (!$option['success']) {
                $this->date_error[] = $option;
            }

            if (!empty($this->date_error)) {
                return response()->json([
                    'message' => $this->date_error['error'],
                    'error' => $this->date_error,
                ], 500);
            }
            $date_params = [
                "value"=> $request->value,
                "body"=> $simulater_mt['body'],
                "duration" => $request->duration    
            ];

            if( $request->receber === "site"){
               $date_pdf_site_mt = $pdfSiteControllers->PdfSiteMt($date_params);
            return response()->json(['success'=> true ,'mensage' => 'Dados da simulação Mt salvos com sucesso!','pdf'=> $date_pdf_site_mt], 200);
            }else if( $request->receber === "email"){

                $date_pdf_email_mt = $pdfEmailControllers->PdfEmailMt($date_params);
                
                if($date_pdf_email_mt){
                    return response()->json([
                        'success'=> true ,
                        'mensage' => 'Dados da simulação Mt salvos com sucesso! | Pdf enviado verifica o email',
                        'pdf'=> $simulater_mt
                    ], 200);
                }else{
                    return response()->json([
                        'success'=> true ,
                        'mensage' => 'Dados da simulação Mt salvos com sucesso! | Pdf nao enviado erro',], 200);
                }
            }

        } catch (\Throwable $e) {
            return response()->json([
                'mensasgem' => 'Erro ao salvar dados da simulação',
                'erros' => $e->getMessage()
            ], 500);
        }

    }

    public function Simulater($data, $user_id)
    {
        try {

            $simulator = new Simulation();
            $simulator->user_id = $user_id['id'];
            $simulator->value = $data['value'];
            $simulator->duraction = $data['duration'];
            $simulator->category_id = $data['category_id'];
            $simulator->insurance_id = $data['insurance_id'];
            $simulator->innsurance_type_id = $data['insurance_type_id'];
            $simulator->polici_type_id = $data['policy_type_id'];

            $simulator->save();

            return [
                'success' => true,
                'simulator_id' => $simulator->id // Removido espaço extra
            ];

        } catch (\Throwable $th) {
            // Aqui você pode registrar o erro, se quiser
            Log::error('Erro ao salvar dados da simulação: ' . $th->getMessage());

            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da simulação',
                'erros' => $th->getMessage()
            ];
        }
    }

    public function Company($data, $corpo, $simulation_id)
    {
        try {

            // Itera sobre cada "company_simulations"
            foreach ($corpo['company_simulations'] as $simulation) {

                $company = new Compania();
                $company->simulation_id = $simulation_id;
                $company->company_id = $simulation['company']['id'];
                $company->save();

                foreach ($simulation['rates'] as $routas) {

                    if(isset($routas['rates'])){

                        foreach ($routas['rates'] as $subRate) {
                            $rate_new = new Rate();
                            $rate_new->rate_id = $subRate['id'];
                            $rate_new->compania_id = $company->id;
                            $rate_new->group_id = $routas['option_group_id'];
                            $rate_new->save();
                        }

                    }else{

                        $rate_new = new Rate();
                        $rate_new->rate_id = $routas['id'];
                        $rate_new->compania_id = $company->id;
                        $rate_new->group_id = $routas['option_group_id'];
                        $rate_new->save();
                    }
/* 
                   /*  if (isset($rates['rates']) && is_array($rates['rates'])) {
                        foreach ($rates['rates'] as $subRate) {
                            $rate_new = new Rate();
                            $rate_new->rate_id = $subRate['option_group_id'];
                            $rate_new->compania_id = $company->id;
                            $rate_new->group_id = $subRate['option_group_id'];
                            $rate_new->save();
                        }
                    } */ 
                }
            }

            
            return ['success' => true,];

        } catch (\Throwable $th) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $th->getMessage()
            ];
        }
    }
 /*    public function Rates($data, $company_id, $controlador)
    {
        try {

            foreach ($data['company_simulations'] as $index => $simulation) {

                if ($index === $controlador) {

                    foreach ($simulation['rates'] as $value) {

                        $rate = new Rate();
                        $rate->compania_id = $company_id;
                        $rate->rate_id = $value['id'];
                        $rate->group_id = $value['option_group_id'];
                        $rate->save();

                        if (isset($value['rates']) && is_array($value['rates'])) {

                            foreach ($value['rates'] as $rota_r) {
                                $rate_rate = new Rate();
                                $rate_rate->compania_id = $company_id;
                                $rate_rate->rate_id = $rota_r['id'];
                                $rate_rate->group_id = $rota_r['option_group_id'];
                                $rate_rate->save();
                            }
                        }
                    }
                    break;
                }
            }

        } catch (\Throwable $th) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $th->getMessage()
            ];
        }
    } */
    public function Options($data, $simulation_id, )
    {
        try {

            $option_merchandise = new Option();
            $option_merchandise->simulation_id = $simulation_id;
            $option_merchandise->option_id = $data['merchandise']['id'];
            $option_merchandise->option_group_id = $data['merchandise']['option_group_id'];
            $option_merchandise->save();

            $option_packaging = new Option();
            $option_packaging->simulation_id = $simulation_id;
            $option_packaging->option_id = $data['packaging']['id'];
            $option_packaging->option_group_id = $data['packaging']['option_group_id'];
            $option_packaging->save();

            $option_coverage = new Option();
            $option_coverage->simulation_id = $simulation_id;
            $option_coverage->option_id = $data['coverage']['id'];
            $option_coverage->option_group_id = $data['coverage']['option_group_id'];
            $option_coverage->save();


            foreach ($data['ways']['options'] as $value) {

                $option_ways = new Option();
                $option_ways->simulation_id = $simulation_id;
                $option_ways->option_id = $value['id'];
                $option_ways->option_group_id = $data['ways']['option_group_id'];
                $option_ways->save();
            }

            foreach ($data['from_tos']['options'] as $value) {

                $option_from_tos = new Option();
                $option_from_tos->simulation_id = $simulation_id;
                $option_from_tos->option_id = $value['id'];
                $option_from_tos->option_group_id = $data['from_tos']['option_group_id'];
                $option_from_tos->save();
            }

            foreach ($data['countries_from']['options'] as $value) {
                $option_countries_from = new Option();
                $option_countries_from->simulation_id = $simulation_id;
                $option_countries_from->option_id = $value['id'];
                $option_countries_from->option_group_id = $data['countries_from']['option_group_id'];
                $option_countries_from->save();
            }

            foreach ($data['countries_to']['options'] as $value) {
                $option_countries_to = new Option();
                $option_countries_to->simulation_id = $simulation_id;
                $option_countries_to->option_id = $value['id'];
                $option_countries_to->option_group_id = $data['countries_to']['option_group_id'];
                $option_countries_to->save();
            }

            foreach ($data['conditions']['options'] as $value) {
                $option_conditions = new Option();
                $option_conditions->simulation_id = $simulation_id;
                $option_conditions->option_id = $value['id'];
                $option_conditions->option_group_id = $data['conditions']['option_group_id'];
                $option_conditions->save();
            }

            if (isset($data['states_from']['options']) && !empty($data['states_from']['options'])) {
                foreach ($data['states_from']['options'] as $value) {
                    $option_states_from = new Option();
                    $option_states_from->simulation_id = $simulation_id;
                    $option_states_from->option_id = $value['id'];
                    $option_states_from->option_group_id = $data['states_from']['option_group_id'];
                    $option_states_from->save();
                    $this->OptionOption($option_countries_from->id, $option_states_from->id);
                }
            }

            if (isset($data['states_to']['options']) && !empty($data['states_to']['options'])) {
                foreach ($data['states_to']['options'] as $value) {
                    $option_states_to = new Option();
                    $option_states_to->simulation_id = $simulation_id;
                    $option_states_to->option_id = $value['id'];
                    $option_states_to->option_group_id = $data['states_to']['option_group_id'];
                    $option_states_to->save();
                    $this->OptionOption($option_countries_to->id, $option_states_to->id);
                }
            }

            return ['success' => true,];

        } catch (\Throwable $th) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Option',
                'erros' => $th->getMessage()
            ];
        }
    }
    public function OptionOption($option_id, $other_id)
    {
        try {
            $option_option = new Option_Option();

            $option_option->option_id = $option_id;
            $option_option->other_id = $other_id;

            $option_option->save();
            return [
                'success' => true,
            ];
        } catch (\Throwable $th) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da option option',
                'erros' => $th->getMessage()
            ];
        }
    }
}
