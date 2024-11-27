<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Log;

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
        //$coverage_duration_months = $data_lefe['duration'] * 12; // Duração em meses
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
        $textoEmail = self::TextoEmailBoasVindas();
        return [
            'nome' => $textoEmail['nome'],
            'texto' => $textoEmail['texto'],

            'coverages' => $data_lefe['body']['coverages']['options'],
            'aggravations' => $data_lefe['body']['aggravations']['options'],
            'user' => $data_lefe['body']['user'],

            'codigo' => $data_lefe['codigo'],
            'idade' => $idade,
            'coverage_value' => $coverage_value_formatted,
            'coverage_duration' => $data_lefe['duration'],
            'data_inicio' => $dataAtual->format('Y-m-d'), // Data de início
            'hora_inicio' => $horaAtual, // Hora de início
            'data_termo' => $dataTermino, // Data de término
            'data_atual' => $dataAtual, // Data atual
            'preco_apagar' => $count_formatted, // Preço a pagar
        ];
    }
    public function DadosPdfMt($data_site_pdf, $values)
    {
        // Lógica para obter os dados necessários

        $dataAtual = Carbon::now();
        $dataFinal = $dataAtual->copy()->addYears($data_site_pdf['duration']); 
        $horaAtual = $dataAtual->format('H:i:s');

        // Calcular a duração em meses
        $coverage_duration_months = $data_site_pdf['duration'] * 12; // Duração em meses
        $dataTermino = $dataFinal->format('Y-m-d'); // Data de término formatada

        // Formatação dos valores
        $coverage_value_formatted = number_format($data_site_pdf['value'], 0, ',', '.');

        $coverage_rate_count = isset($values['coverage_rate']['value']) ? $values['coverage_rate']['value'] : 0;

        $discount_rate_count = 0; 
        if (isset($values['discounts_rates']) && is_array($values['discounts_rates'])) {
            foreach ($values['discounts_rates'] as $discounts_Rates) {
                $discount_rate_count += isset($discounts_Rates['value']) ? $discounts_Rates['value'] : 0;
            }
        }

        $rate_count = 0; 
        if (isset($values['rates']) && is_array($values['rates'])) {

            foreach ($values['rates'] as $routas) {

                if (isset($routas['rates']) && is_array($routas['rates'])) {

                    foreach ($routas['rates'] as $subRate) {
                        $rate_count += isset($subRate['value']) ? $subRate['value'] : 0;
                    }
                } else {
                    $rate_count += isset($routas['value']) ? $routas['value'] : 0;
                }
            }
        }

        $result_rate = $rate_count + $rate_count * ($discount_rate_count / 100);

        $result_rate = $result_rate * ($coverage_rate_count / 100);
        $taxa_total = $result_rate;

        $result_rate = $result_rate * $data_site_pdf['value'];

        $result_rate = self::FormatrNumber($result_rate,casa_decimal: 2);
        $value = self::FormatrNumber($data_site_pdf['value'],2); 
        $taxa_total = self::FormatrNumber($taxa_total,2); 
        
        $textoEmail = self::TextoEmailBoasVindas();
        $preco_apagar_semestral = str_replace(',', '.', str_replace('.', '', $result_rate));
        $preco_apagar_semestral = self::FormatrNumber((float)$preco_apagar_semestral / 2,2);
        $formatada = self::FormatoDate($dataAtual);

        return [
            'nome' => $textoEmail['nome'],
            'texto' => $textoEmail['texto'],

            'user' => $data_site_pdf['body']['user'],
            'value' => $value,
            'duration' => $data_site_pdf['duration'],
            'preco_apagar' => $result_rate, // Preço a pagar
            'preco_apagar_semestral' => $preco_apagar_semestral, // Preço a pagar

            'dataAtual' => $dataAtual,
            'data_inicio' => $dataAtual->format('Y-m-d'), // Data de início
            'horaAtual' => $horaAtual,
            'coverage_duration' => $coverage_duration_months,
            'data_termo' => $dataTermino,
            'coverage_value' => $coverage_value_formatted,
            'data' => $formatada,

            'merchandise' => $data_site_pdf['body']['merchandise'],
            'packaging' => $data_site_pdf['body']['packaging'],
            'coverage' => $data_site_pdf['body']['coverage'],
            'ways' => $data_site_pdf['body']['ways'],
            'countries_from' => $data_site_pdf['body']['countries_from'],
            'countries_to' => $data_site_pdf['body']['countries_to'],
            'states_from' => $data_site_pdf['body']['states_from'],
            'states_to' => $data_site_pdf['body']['states_to'],
            'origin' => $data_site_pdf['origin'],
            'destination' => $data_site_pdf['destination'],
            'franchise'=> $data_site_pdf['body']['franchise']['name'],
            'min_franchise'=> $data_site_pdf['body']['min_franchise']['name'],
            'taxa_total'=> $taxa_total,
        ];
    }

    public function FormatrNumber($valor,$casa_decimal){
        return number_format($valor,$casa_decimal,',','.');
    }

    public function FormatoDate($dataAtual){
        //return date('d M Y',strtotime($dataAtual));
        //return $formatada = $dataAtual->translatedFormat('l, d M Y');
        return $dataAtual->translatedFormat('d \d\e F \d\e Y');
    }

    public function TextoEmailBoasVindas(){
        return[
            'nome'=> 'Global Nduengue, LDA',
            'texto'=> 'Olá, Muito Obrigado Por Simular Aqui?',
        ];
    }

}
