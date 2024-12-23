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

                $pdf = PDF::loadView('life.life_' . $values['company']['id'], ['dados' => $data_pdf]);
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

                $data_env_view = (new DadosPdfContrlloers)->DadosPdfMt($data_site_pdf, $values);

    
                $pdf = PDF::loadView('mt.mt_' . $values['company']['id'], ['dados' => $data_env_view]);
                $pdfContent = $pdf->output();

                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;

        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function PdfSiteAt($data_site_pdf)
    {
        try {
            foreach ($data_site_pdf['body']['company_simulations'] as $values) {

                //$data_pdf = (new DadosPdfContrlloers)->DadosPdfAt($data_site_pdf, $values);
                $data_pdf = [
                    'user' => $data_site_pdf['body']['user'],
                    'msm' => $data_site_pdf['msm'],
                    'activity' => $data_site_pdf['body']['activity'],
                    'codigo' => $data_site_pdf['codigo'],
                    'activity_rate_value'=> $values['activity_rate']['value'],
                ];

                $pdf = PDF::loadView('at.at_' . $values['company']['id'], ['dados' => $data_pdf]);
                $pdfContent = $pdf->output();

                // Adiciona o PDF codificado ao array
                $this->allpdf[] = base64_encode($pdfContent);
            }
            return $this->allpdf;
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }}