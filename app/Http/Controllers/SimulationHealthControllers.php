<?php

namespace App\Http\Controllers;

use App\Models\Compania;
use App\Models\Option;
use App\Models\Rate;
use App\Models\Simulation;
use Illuminate\Http\Request;

class SimulationHealthControllers extends Controller
{
    protected $rote_mt_api = "simulator/health/save";
    public $date_error = [];
    public function SalvarSimulacaoHealth(
        Request $request,
        ApiController $apiController,
        Validation $validation,
        PdfSiteControllers $pdfSiteControllers,
        PdfEmailControllers $pdfEmailControllers
    ) {
        try {
            $Params = $validation->ValidParamsHealth($request->all());

            if (!empty($Params)) {
                return response()->json([
                    'error' => 'Parâmetros ausentes',
                    'Parametros' => $Params
                ], 422);
            }
            $simulater_health = $apiController->ApiSimulater($request->all(), $this->rote_mt_api);
            
            if (!$simulater_health['success'] && $simulater_health['status'] !== 204) {
                return response()->json([
                    'dados' => $simulater_health,
                    'message' => 'Erro na simulação da vida.',
                    'error' => $simulater_health['error']
                ], 500);
            } elseif (!$simulater_health['success'] && $simulater_health['status'] === 204) {
                return response()->json([
                    'dados' => $simulater_health,
                    'message' => 'Dados da simulação salvos com sucesso '
                ], 204);
            }

            $codigo = $validation->gerarCodigoSimulacao();
            $simulater = $this->Simulator($request->all(), $simulater_health['body'], $codigo);
            if (!$simulater['success']) {
                $this->date_error[] = $simulater;
            }


            $compania = $this->Company($simulater_health['body'], $simulater['simulator_id']);
            if (!$compania['success']) {
                $this->date_error[] = $compania;
            }

            $option = $this->Options($simulater_health['body'], $simulater['simulator_id']);
            if (!$option['success']) {
                $this->date_error[] = $option;
            }

            if (!empty($this->date_error)) {
                return response()->json([
                    'message' => $this->date_error['error'],
                    'error' => $this->date_error,
                ], 500);
            }

            return response()->json([
                'message' => 'Dados da simulação salvos com sucesso!',
                'success' => true,
                'data' => $simulater,
            ], 200);

            /* $date_params = [
                "body" => $simulater_health['body'],
            ];

            if ($request->receber === "site") {
                 $date_pdf_site_health = $pdfSiteControllers->PdfSiteAt($date_params);
                 return response()->json(['success' => true, 'mensage' => 'Dados da simulação Life salvos com sucesso!', 'pdf' => $date_pdf_site_health], 200);
            } else if ($request->receber === "email") {
                 $date_pdf_email_health = $pdfEmailControllers->PdfEmailAt($date_params);
                 return response()->json(['success' => true, 'mensage' => 'Dados da simulação Life salvos com sucesso!', 'dados' => $simulater_health, 'email' => $date_pdf_email_health], 200);
            } */             
        } catch (\Throwable $th) {
            return response()->json([
                'mensasgem' => 'Erro ao salvar dados da simulação Saúde',
                'erros' => $th->getMessage()
            ], 500);
        }

    }    public function Simulator($dados_simulater, $user_id, $codigo){
        try {

            $user_id = $user_id['user']['id'];

            $simulator = new Simulation();
            $simulator->user_id = $user_id;
            /* $simulator->value = $dados_simulater['msm']; */
            /* $simulator->duraction = null; */
            $simulator->category_id = $dados_simulater['category_id'];
            $simulator->insurance_id = $dados_simulater['insurance_id'];
            $simulator->innsurance_type_id = $dados_simulater['insurance_type_id'];
            $simulator->polici_type_id = $dados_simulater['policy_type_id'];
          /*   $simulator->origin = "";
            $simulator->destination = ""; */
            $simulator->receber = $dados_simulater['receber'];
            $simulator->codigo = $codigo;

            $simulator->save();

            return [
                'success' => true,
                'simulator_id' => $simulator->id
            ];

        } catch (\Throwable $e) {
            return [
                'success' => false,
                'message' => 'erro ao salvar dados da simulation na tabela simulations',
                'error' => $e->getMessage(),
            ];
        }
    }
    public function Company($corpo, $simulation_id)
    {
        try {

            // Itera sobre cada "company_simulations"
            foreach ($corpo['company_simulations'] as $simulation) {

                $company = new Compania();
                $company->simulation_id = $simulation_id;
                $company->company_id = $simulation['company']['id'];
                $company->save();

               /*  //Add taxas Coberturas
                $coverage_rate = new Rate();
                $coverage_rate->rate_id = $simulation['coverage_rate']['id'];
                $coverage_rate->compania_id = $company->id;
                $coverage_rate->group_id = $simulation['coverage_rate']['option_group_id'];
                $coverage_rate->save();
            
                //Add discounts_rates
                foreach ($simulation['discounts_rates'] as $discounts_Rates) {
                    $discounts_rates = new Rate();
                    $discounts_rates->rate_id = $discounts_Rates['id'];
                    $discounts_rates->compania_id = $company->id;
                    $discounts_rates->group_id = $discounts_Rates['option_group_id'];
                    $discounts_rates->save();
                }
 */
                //Add Taxas
                foreach ($simulation['rates'] as $routas) {

                    if (isset($routas['rates'])) {

                        foreach ($routas['rates'] as $subRate) {
                            $rate_new = new Rate();
                            $rate_new->rate_id = $subRate['id'];
                            $rate_new->compania_id = $company->id;
                            $rate_new->group_id = $routas['option_group_id'];
                            $rate_new->save();
                        }

                    } else {
                        $rate_new = new Rate();
                        $rate_new->rate_id = $routas['id'];
                        $rate_new->compania_id = $company->id;
                        $rate_new->group_id = $routas['option_group_id'];
                        $rate_new->save();
                    }
                   
                }
            }
            return ['success' => true, 'mensagem' => 'Dados da Company e taxas salvos com sucesso!'];

        } catch (\Throwable $th) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company e taxas',
                'erros' => $th->getMessage()
            ];
        }
    }

    public function Options($data, $simulation_id, )
    {
        try {

            $copayment_policy = new Option();
            $copayment_policy->simulation_id = $simulation_id;
            $copayment_policy->option_id = $data['copayment_policy']['id'];
            $copayment_policy->option_group_id = $data['copayment_policy']['option_group_id'];
            $copayment_policy->save();

            $copayment_percentage = new Option();
            $copayment_percentage->simulation_id = $simulation_id;
            $copayment_percentage->option_id = $data['copayment_percentage']['id'];
            $copayment_percentage->option_group_id = $data['copayment_percentage']['option_group_id'];
            $copayment_percentage->save();

            $reimbursement_policy = new Option();
            $reimbursement_policy->simulation_id = $simulation_id;
            $reimbursement_policy->option_id = $data['reimbursement_policy']['id'];
            $reimbursement_policy->option_group_id = $data['reimbursement_policy']['option_group_id'];
            $reimbursement_policy->save();

            $geo_area = new Option();
            $geo_area->simulation_id = $simulation_id;
            $geo_area->option_id = $data['geo_area']['id'];
            $geo_area->option_group_id = $data['geo_area']['option_group_id'];
            $geo_area->save();
        
            if($data['deductible_policy'] != null){

                $deductible_policy = new Option();
                $deductible_policy->simulation_id = $simulation_id;
                $deductible_policy->option_id = $data['deductible_policy']['id'];
                $deductible_policy->option_group_id = $data['deductible_policy']['option_group_id'];
                $deductible_policy->save();
    
            }
            if($data['deductible_fixed_value'] != null){

                $deductible_fixed_value = new Option();
                $deductible_fixed_value->simulation_id = $simulation_id;
                $deductible_fixed_value->option_id = $data['deductible_fixed_value']['id'];
                $deductible_fixed_value->option_group_id = $data['deductible_fixed_value']['option_group_id'];
                $deductible_fixed_value->save();
            }
            if($data['deductible_percentage_insured_value'] != null){

                $deductible_percentage_insured_value = new Option();
                $deductible_percentage_insured_value->simulation_id = $simulation_id;
                $deductible_percentage_insured_value->option_id = $data['deductible_percentage_insured_value']['id'];
                $deductible_percentage_insured_value->option_group_id = $data['deductible_percentage_insured_value']['option_group_id'];
                $deductible_percentage_insured_value->save();
            }
            if($data['deductible_percentage_loss'] != null){

                $deductible_percentage_loss = new Option();
                $deductible_percentage_loss->simulation_id = $simulation_id;
                $deductible_percentage_loss->option_id = $data['deductible_percentage_loss']['id'];
                $deductible_percentage_loss->option_group_id = $data['deductible_percentage_loss']['option_group_id'];
                $deductible_percentage_loss->save();
            }
            if($data['reimbursement_percentage'] != null){

                $reimbursement_percentage = new Option();
                $reimbursement_percentage->simulation_id = $simulation_id;
                $reimbursement_percentage->option_id = $data['reimbursement_percentage']['id'];
                $reimbursement_percentage->option_group_id = $data['reimbursement_percentage']['option_group_id'];
                $reimbursement_percentage->save();
            }

            foreach ($data['coverages']['options'] as $value) {
                $coverages = new Option();
                $coverages->simulation_id = $simulation_id;
                $coverages->option_id = $value['id'];
                $coverages->option_group_id = $data['coverages']['option_group_id'];
                $coverages->save();
            }
            foreach ($data['add_coverages']['options'] as $value) {
                $add_coverages = new Option();
                $add_coverages->simulation_id = $simulation_id;
                $add_coverages->option_id = $value['id'];
                $add_coverages->option_group_id = $data['add_coverages']['option_group_id'];
                $add_coverages->save();
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
}
