<?php

namespace App\Http\Controllers;

use App\Models\Compania;
use App\Models\DynamicValues;
use App\Models\Option;
use App\Models\Rate;
use App\Models\Simulation;
use Illuminate\Http\Request;

class SimulationATControllres extends Controller
{
    protected $rote_mt_api = "simulator/at/save";
    public $date_error = [];
    public function SalvarSimulacaoAT(
        Request $request,
        ApiController $apiController,
        Validation $validation,
        PdfSiteControllers $pdfSiteControllers,
        PdfEmailControllers $pdfEmailControllers
    ) {
        try {
            $Params = $validation->ValidParamsAT($request->all());

            if (!empty($Params)) {
                return response()->json([
                    'error' => 'Parâmetros ausentes',
                    'Parametros' => $Params
                ], 422);
            }
            $simulater_at = $apiController->ApiSimulater($request->all(), $this->rote_mt_api);

            if (!$simulater_at['success'] && $simulater_at['status'] !== 204) {
                return response()->json([
                    'dados' => $simulater_at,
                    'message' => 'Erro na simulação da vida.',
                    'error' => $simulater_at['error']
                ], 500);
            } elseif (!$simulater_at['success'] && $simulater_at['status'] === 204) {
                return response()->json([
                    'dados' => $simulater_at,
                    'message' => 'Dados da simulação salvos com sucesso & ' . $simulater_at['message']
                ], 204);
            }

            $codigo = $validation->gerarCodigoSimulacao();
            $simulater = $this->Simulator($request->all(), $simulater_at['body'], $codigo);
            if (!$simulater['success']) {
                $this->date_error[] = $simulater;
            }

            $compania = $this->Company($request->company_ids, $simulater_at['body'], $simulater['simulator_id']);
            if (!$compania['success']) {
                $this->date_error[] = $compania;
            }

            $dynamicValues = $this->DynamicValues( $simulater_at['body'], $simulater['simulator_id']);
            if (!$dynamicValues['success']) {
                $this->date_error[] = $dynamicValues;
            }

            $option = $this->Options($simulater_at['body'], $simulater['simulator_id']);
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
                "msm" => $request->msm,
                "body" => $simulater_at['body'],
                "codigo" => $codigo,
            ];
           

            if ($request->receber === "site") {
                 $date_pdf_site_life = $pdfSiteControllers->PdfSiteAt($date_params);
                 return response()->json(['success' => true, 'mensage' => 'Dados da simulação Life salvos com sucesso!', 'pdf' => $date_pdf_site_life], 200);
            } else if ($request->receber === "email") {
                 $date_pdf_email_life = $pdfEmailControllers->PdfEmailAt($date_params);
                 return response()->json(['success' => true, 'mensage' => 'Dados da simulação Life salvos com sucesso!', 'dados' => $simulater_at, 'email' => $date_pdf_email_life], 200);
            }
  

        } catch (\Throwable $th) {
            return response()->json([
                'mensasgem' => 'Erro ao salvar dados da simulação Acidente de Trabalho',
                'erros' => $th->getMessage()
            ], 500);
        }
    }
    public function Simulator($dados_simulater, $user_id, $codigo)
    {
        try {

            $user_id = $user_id['user']['id'];

            $simulator = new Simulation();
            $simulator->user_id = $user_id;
            $simulator->value = $dados_simulater['msm'];
            $simulator->category_id = $dados_simulater['category_id'];
            $simulator->insurance_id = $dados_simulater['insurance_id'];
            $simulator->innsurance_type_id = $dados_simulater['insurance_type_id'];
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
    public function Company($data, $corpo, $simulation_id)
    {
        try {

            foreach ($data as $index => $value) {

                $company = new Compania();
                $company->simulation_id = $simulation_id;
                $company->company_id = $value;

                $company->save();
                $this->Rates($corpo, $company->id, $index);
            }
            return ['success' => true,];

        } catch (\Throwable $e) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $e->getMessage()
            ];
        }
    }
    public function Rates($data, $company_id, $controlador)
    {
        try {

            foreach ($data['company_simulations'] as $index => $simulation) {

                if ($index === $controlador) {
                    $activity_rate = new Rate();
                    $activity_rate->compania_id = $company_id;
                    $activity_rate->rate_id = $simulation['activity_rate']['id'];
                    $activity_rate->group_id = $simulation['activity_rate']['option_group_id'];
                    $activity_rate->save();
                    break;
                }
            }

        } catch (\Throwable $e) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Company',
                'erros' => $e->getMessage()
            ];
        }
    }
    public function DynamicValues($data, $simulation_id)
    {
        try {
            $data_values = [
                [
                    'value' => $data['policy_duration'],
                    'description' => "policy_duration",
                ],
                [
                    'value' => $data['policy_duration_month_number'],
                    'description' => "policy_duration_month_number",
                ],
                [
                    'value' => $data['salary_volume'],
                    'description' => "salary_volume",
                ],
                [
                    'value' => $data['activity_id'],
                    'description' => "activity_id",
                ],
                [
                    'value' => $data['payment_times'],
                    'description' => "payment_times",
                ],
                [
                    'value' => $data['has_offshore_employees'],
                    'description' => "has_offshore_employees",
                ],
                [
                    'value' => $data['get_employees_by'],
                    'description' => "get_employees_by",
                ],
                [
                    'value' => $data['offshore_number'],
                    'description' => "offshore_number",
                ],
                [
                    'value' => $data['onshore_number'],
                    'description' => "onshore_number",
                ],
            ];

            foreach ($data_values as $value) {
                if (empty($value['value'])) {
                    continue; 
                }
                $dynamic_values = new DynamicValues();
                $dynamic_values->simulation_id = $simulation_id;
                $dynamic_values->value = $value['value'];
                $dynamic_values->description = $value['description'];
                $dynamic_values->save();
            }
            return ['success' => true,];
        } catch (\Throwable $th) {
            return ['success' => false, 'message' => $th->getMessage()];
        }
    }
    public function Options($data, $simulation_id, )
    {
        try {

            $activity = new Option();
            $activity->simulation_id = $simulation_id;
            $activity->option_id = $data['activity']['id'];
            $activity->option_group_id = $data['activity']['option_group_id'];
            $activity->save();

            return ['success' => true,];

        } catch (\Throwable $e) {
            return [
                'success' => false,
                'mensagem' => 'Erro ao salvar dados da Option',
                'erros' => $e->getMessage()
            ];
        }
    }
}