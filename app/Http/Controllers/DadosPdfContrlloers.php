<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class DadosPdfContrlloers extends Controller
{
    public function DadosPdfLife($data_lefe, $coverages, $aggravations)
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
            'count_formatted' => $count_formatted
        ];
    }
    public function DadosPdfMt($data_site_pdf)
    {
        // Lógica para obter os dados necessários
        $idade = Carbon::parse($data_site_pdf['body']['user']['birth_date'])->age;
        $count = 0;

        $dataAtual = Carbon::now();
        $dataFinal = $dataAtual->copy()->addYears($data_site_pdf['duration']); // Cópia para não modificar $dataAtual
        $horaAtual = $dataAtual->format('H:i:s');

        // Calcular a duração em meses
        $coverage_duration_months = $data_site_pdf['duration'] * 12; // Duração em meses
        $dataTermino = $dataFinal->format('Y-m-d'); // Data de término formatada

        // Formatação dos valores
        $coverage_value_formatted = number_format($data_site_pdf['value'], 0, ',', '.');
        // Calcular o preço a pagar
        $count = ($count * $data_site_pdf['value']) / 100;

        $count_formatted = number_format($count, 0, ',', '.');



        return [   
            'idade' => $idade,
            'dataAtual' => $dataAtual,
            'data_inicio' => $dataAtual->format('Y-m-d'), // Data de início
            'horaAtual' => $horaAtual,
            'coverage_duration' => $coverage_duration_months,
            'dataTermino' => $dataTermino,
            'coverage_value' => $coverage_value_formatted,
            'count_formatted' => $count_formatted
        ];
    }


}
