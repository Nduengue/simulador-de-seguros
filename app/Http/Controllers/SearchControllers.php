<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;

class SearchControllers extends Controller
{
    public function SearchSimulator(Request $request)
    {
        try {

            return response()->json([
                'message' => 'Dados da simulação Life salvos com sucesso!',
                'success' => true,
                'data' => $request->all()
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Erro ao salvar dados da simulação Life.',
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function SelectedAllSimulator(Request $request)
    {
        try {

            /* $simulacao = \DB::table('simulations')
            ->join('companias', 'simulations.id', '=', 'companias.simulation_id')
            ->join('options', 'simulations.id', '=', 'options.simulation_id')
            ->select('companias.company_id', 'simulations.*')  
            ->get(); */

            $simulacoes = \DB::table('simulations')
                ->where('simulations.category_id', '=', $request->id)
                ->select(
                    'simulations.id',
                    'simulations.user_id',
                    'simulations.category_id',
                    'simulations.insurance_id',
                    'simulations.innsurance_type_id',
                    'simulations.polici_type_id'
                )
                ->get();

            $resultado = [];
            foreach ($simulacoes as $simulacao) {
                $companias = \DB::table('companias')
                    ->where('simulation_id', $simulacao->id)
                    ->select('id', 'company_id')
                    ->get();

                $options = \DB::table('options')
                    ->where('simulation_id', $simulacao->id)
                    ->select('option_id', 'option_group_id')
                    ->get();

                $companiasComRotas = [];

                foreach ($companias as $company) {

                    $rotas = \DB::table('rates')
                        ->where('compania_id', $company->id)
                        ->pluck('rates.rate_id')
                        ->toArray();

                    $companiasComRotas[] = [
                        'compania_id' => $company->company_id,
                        'rates' => $rotas,
                    ];
                }
                unset($simulacao->id);

                $simulacao->companias = $companiasComRotas;
                $simulacao->options = $options;

                $resultado[] = $simulacao;
            }

            if (!empty($resultado)) {
                return response()->json([
                    'message' => 'Dados encontrados',
                    'success' => true,
                    'data' => $resultado
                ], 200);

            } else {
                return response()->json([
                    'message' => 'Sem dados encontrados',
                    'success' => true,
                    'data' => $resultado
                ], 200);
            }

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Buscar Dados da Simulação.',
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function SelectedAllSimulatorAll(Request $request)
    {
        try {

            $simulacoes = \DB::table('simulations')
                ->where('simulations.insurance_id', '=', $request->id)
                ->select(
                    'simulations.id',
                    'simulations.user_id',
                    'simulations.category_id',
                    'simulations.insurance_id',
                    'simulations.innsurance_type_id',
                    'simulations.polici_type_id'
                )
                ->get();

            $resultado = [];
            foreach ($simulacoes as $simulacao) {
                
                $companias = \DB::table('companias')
                    ->where('simulation_id', $simulacao->id)
                    ->select('id', 'company_id')
                    ->get();

                $options = \DB::table('options')
                    ->where('simulation_id', $simulacao->id)
                    ->select('option_id', 'option_group_id', 'id')
                    ->get();

                $companiasComRotas = [];
                foreach ($companias as $company) {
                    $rotas = \DB::table('rates')
                        ->where('compania_id', $company->id)
                        ->pluck('rates.rate_id')
                        ->toArray();

                    $companiasComRotas[] = [
                        'compania_id' => $company->company_id,
                        'rates' => $rotas,
                    ];
                }

                $optionGroup = [];
                foreach ($options as $opcao) {

                    $relatedOptionIds = \DB::table('option__options')
                        ->where('option_id', $opcao->id)
                        ->pluck('other_id')
                        ->toArray();

                        $relatedOptionsDetails = \DB::table('options')
                        ->where('options.id', $relatedOptionIds)
                        ->select('option_id', 'option_group_id')
                        ->get();

                    $relatedOptionsArray = [];
                    
                    foreach ($relatedOptionsDetails as $relatedOption) {
                        $relatedOptionsArray[] = [
                            'option_id' => $relatedOption->option_id,
                            'option_group_id' => $relatedOption->option_group_id,
                        ];
                    }

                    $optionGroup[] = [
                        'option_id' => $opcao->option_id, 
                        'relation_options' => $relatedOptionsArray, 
                        'option_group_id' => $opcao->option_group_id,
                    ];
                }

                unset($simulacao->id);

                $simulacao->companias = $companiasComRotas;
                $simulacao->options = $optionGroup;

                $resultado[] = $simulacao;
            }


            if (!empty($resultado)) {
                return response()->json([
                    'message' => 'Dados encontrados',
                    'success' => true,
                    'data' => $resultado
                ], 200);

            } else {
                return response()->json([
                    'message' => 'Sem dados encontrados',
                    'success' => true,
                    'data' => $resultado
                ], 200);
            }

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Buscar Dados da Simulação.',
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }
}