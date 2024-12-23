<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SimulationHealthControllers extends Controller
{
    protected $rote_mt_api = "simulator/health/save";
    public $date_error = [];
    public function SalvarSimulacaoHealth(
        Request $request,
        ApiController $apiController,
        Validation $validation,
        PdfSiteControllers $pdfSiteControllers
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
                    'message' => 'Dados da simulação salvos com sucesso & ' . $simulater_health['message']
                ], 204);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'mensasgem' => 'Erro ao salvar dados da simulação Saúde',
                'erros' => $th->getMessage()
            ], 500);
        }
    }
}
