<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class DadosPdfContrlloers extends Controller
{
    public function DadosPdfLife($data_lefe,$coverages,$aggravations)
    {
        $idade = Carbon::parse($data_lefe['body']['user']['birth_date'])->age;
        $count = 0;   

        // Obtém os dados necessários
        $dataAtual = Carbon::now();
        $dataFinal = $dataAtual->copy()->addYears($data_lefe['duration']); // Cópia para não modificar $dataAtual
        $horaAtual = $dataAtual->format('H:i:s');

        // Calcular a duração em meses
        $coverage_duration_months = $data_lefe['duration'] * 12; // Duração em meses
        $dataTermino = $dataFinal->format('Y-m-d'); // Data de término formatada
        // Formatação dos valores
        $coverage_value_formatted = number_format($data_lefe['value'], 0, ',', '.');
        
         // Somar as taxas das coberturas
         foreach ($coverages as $coverage) {
            if ($coverage['value'] !== null) { // Verifica se a taxa não é nula
                $count += $coverage['value'];
            }
        }

        // Somar as taxas dos agravamentos
        foreach ($aggravations as $aggravation) {
            if ($aggravation['value'] !== null) { // Verifica se a taxa não é nula
                $count += $aggravation['value'];
            }
        }

        // Calcular o preço a pagar
        $count = ($count * $data_lefe['value']) / 100;
        $count_formatted = number_format($count, 0, ',', '.');

        return [
            'idade' => $idade,
            'dataAtual' => $dataAtual,
            'data_inicio' => $dataAtual->format('Y-m-d'), // Data de início
            'dataFinal' => $dataFinal,
            'horaAtual' => $horaAtual,
            'coverage_duration' => $coverage_duration_months,
            'dataTermo' => $dataTermino,
            'coverage_value' => $coverage_value_formatted,
            'count_formatted'=> $count_formatted
        ];
    }
    public function DadosPdf($coverages,$aggravations,$coverage_value, $coverage_duration)
    {
        $count = 0;   
        // Obtém os dados necessários
        $dataAtual = Carbon::now();
        $dataFinal = $dataAtual->copy()->addYears($coverage_duration); // Cópia para não modificar $dataAtual
        $horaAtual = $dataAtual->format('H:i:s');

        // Calcular a duração em meses
        $coverage_duration_months = $coverage_duration * 12; // Duração em meses
        $dataTermo = $dataFinal->format('Y-m-d'); // Data de término formatada
        // Formatação dos valores
        $coverage_value_formatted = number_format($coverage_value, 0, ',', '.');
        
         // Somar as taxas das coberturas
         foreach ($coverages as $coverage) {
            if ($coverage['rate'] !== null) { // Verifica se a taxa não é nula
                $count += $coverage['rate'];
            }
        }

        // Somar as taxas dos agravamentos
        foreach ($aggravations as $aggravation) {
            if ($aggravation['rate'] !== null) { // Verifica se a taxa não é nula
                $count += $aggravation['rate'];
            }
        }

        // Calcular o preço a pagar
        $count = ($count * $coverage_value) / 100;
        $count_formatted = number_format($count, 0, ',', '.');

        return [
            'dataAtual' => $dataAtual,
            'dataFinal' => $dataFinal,
            'horaAtual' => $horaAtual,
            'coverage_duration' => $coverage_duration_months,
            'dataTermo' => $dataTermo,
            'coverage_value' => $coverage_value_formatted,
            'count_formatted'=> $count_formatted
        ];
    }
}
