<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\DadosPdfContrlloers;
use Log;

class PdfSiteControllers extends Controller
{

    public $allpdf = [];
    public function PdfSiteLife($data_site_pdf)
    {
        try {

            foreach ($data_site_pdf['body']['company_simulations'] as $values) {

                $data_pdf = (new DadosPdfContrlloers)->DadosPdfLife(
                    $data_site_pdf,
                    $values['coverages_rates']['rates'],
                    $values['aggravations_rates']['rates']
                );

                $data_env_view = [
                    'coverages' => $data_site_pdf['body']['coverages']['options'],
                    'aggravations' => $data_site_pdf['body']['aggravations']['options'],
                    'user' => $data_site_pdf['body']['user'],
                    'idade' => $data_pdf['idade'],
                    'coverage_value' => $data_pdf['coverage_value'],
                    'coverage_duration' => $data_pdf['coverage_duration'],
                    'data_inicio' => $data_pdf['data_inicio'], // Data de início
                    'hora_inicio' => $data_pdf['horaAtual'], // Hora de início
                    'data_termo' => $data_pdf['dataTermo'], // Data de término
                    'data_atual' => $data_pdf['dataAtual'], // Data atual
                    'preco_apagar' => $data_pdf['count_formatted'], // Preço a pagar
                ];

                $pdf = PDF::loadView('life.life_' . $values['company']['id'], ['dados' => $data_env_view]);
                $pdfContent = $pdf->output();

                // Adiciona o PDF codificado ao array
                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;

        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function PdfSiteMt($data_site_pdf)
    {
        try {

            foreach ($data_site_pdf['body']['company_simulations'] as $values) {

                $data_pdf = (new DadosPdfContrlloers)->DadosPdfMt($data_site_pdf);


                $coverage_rate_count = isset($values['coverage_rate']['value']) ? $values['coverage_rate']['value'] : 0;

                $discount_rate_count = 0; // Inicialize para evitar erros
                if (isset($values['discounts_rates']) && is_array($values['discounts_rates'])) {
                    foreach ($values['discounts_rates'] as $discounts_Rates) {
                        $discount_rate_count += isset($discounts_Rates['value']) ? $discounts_Rates['value'] : 0;
                    }
                }
                
                $rate_count = 0; // Inicialize para evitar erros
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
                $result_rate = number_format($result_rate, 2, ',', '.');

                $value = number_format($data_site_pdf['value'], 2, ',', '.');

                $data_env_view = [
                    'user' => $data_site_pdf['body']['user'],
                    'value' => $value,
                    'duration' => $data_site_pdf['duration'],

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
                    'taxa_total'=> $taxa_total,
                    

                    'idade' => $data_pdf['idade'],
                    'dataAtual' => $data_pdf['dataAtual'],
                    'data_inicio' => $data_pdf['data_inicio'], // Data de início
                    'hora_inicio' => $data_pdf['horaAtual'], // Hora de início
                    'data_termo' => $data_pdf['dataTermino'], // Data de término
                    'data_atual ' => $data_pdf['dataAtual'], // Data atual
                    'preco_apagar' => $result_rate, // Preço a pagar
                    'coverage_duration' => $data_pdf['coverage_duration'],
                    'coverage_value' => $data_pdf['coverage_value'],
                    'data'=> $data_pdf['data'],
                ];

                $pdf = PDF::loadView('mt.mt_' . $values['company']['id'], ['dados' => $data_env_view]);
                $pdfContent = $pdf->output();

                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;

        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
