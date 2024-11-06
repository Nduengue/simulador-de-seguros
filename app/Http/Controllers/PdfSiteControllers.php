<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\DadosPdfContrlloers;

class PdfSiteControllers extends Controller{
    
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

                $pdf = PDF::loadView('view_'.$values['company']['id'], ['dados' => $data_env_view]);
                $pdfContent = $pdf->output();
    
                // Adiciona o PDF codificado ao array
                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;

        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function PdfSiteMt($data_site_pdf){
        try {

            foreach ($data_site_pdf['body']['company_simulations'] as $values) {
                
                $data_env_view= [

                ];

                $pdf = PDF::loadView('mt.mt_'.$values['company']['id'], ['dados' => $data_env_view]);
                $pdfContent = $pdf->output();
    
                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;
               
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
