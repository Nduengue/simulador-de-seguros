<?php

namespace App\Http\Controllers;

use App\Mail\EnviarEmail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Mail;
use Log;

class PdfEmailControllers extends Controller{
    
    public $allpdf = [];  
    public function DocumentPdf($dados,$view,$name){
        // Carregue a view que você deseja transformar em PDF
        $pdf = PDF::loadView( $view, ['dados' => $dados]);

        // Salve o PDF em um local temporário
        $filePath = storage_path('app/public/'.$name.'.pdf');
        $pdf->save($filePath);

        return $filePath;
    }
    

    public  function PdfEmailLife($data_site_pdf){
        try {

            foreach ($data_site_pdf['body']['company_simulations'] as $values) {
               
                $data_env_view = (new DadosPdfContrlloers)->DadosPdfLife(
                    $data_site_pdf,
                    $values['coverages_rates']['rates'],
                    $values['aggravations_rates']['rates']
                );
                
                $views_life = "life.life_".$values['company']['id'];
                $filePath = $this->DocumentPdf($data_env_view, $views_life,$values['company']['name']);
                $this->allpdf[] = $filePath;
            }

            $email = Mail::to($data_site_pdf['body']['user']['email'])->send(new EnviarEmail($data_env_view, $this->allpdf));

            return $email; 
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function PdfEmailMt($data_email_pdf){
        try {
            $data_env_view = null;

            foreach ($data_email_pdf['body']['company_simulations'] as $values) {

                $data_env_view = (new DadosPdfContrlloers)->DadosPdfMt($data_email_pdf, $values);

                $views_mt = "mt.mt_".$values['company']['id'];
                $filePath = $this->DocumentPdf($data_env_view, $views_mt,$values['company']['name']);
                $this->allpdf[] = $filePath;
            }
            
            if ($data_env_view !== null) {
                $email = Mail::to($data_email_pdf['body']['user']['email'])->send(new EnviarEmail($data_env_view, $this->allpdf));
                return $email;
            } else {
                return null;
            }
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function PdfEmailAt($data_email_pdf){
        try {

            $dataAtual = Carbon::now();
           // $formatada = self::FormatoDate($dataAtual);
            $formatada =$dataAtual->translatedFormat('d \d\e F \d\e Y');
            foreach ($data_email_pdf['body']['company_simulations'] as $values) {

                //$data_env_view = (new DadosPdfContrlloers)->DadosPdfMt($data_email_pdf, $values);
                $data_env_view = [
                    'nome' => "Global Nduengue, LDA",
                    'texto' => "Obrigado por escolher a Global Nduengue, LDA para a sua segurança.",
                    'user' => $data_email_pdf['body']['user'],
                    'msm' => $data_email_pdf['msm'],
                    'activity' => $data_email_pdf['body']['activity'],
                    'codigo' => $data_email_pdf['codigo'],
                    'activity_rate_value'=> $values['activity_rate']['value'],
                    'data' => $formatada,                    
                ];

                $views_mt = "at.at_".$values['company']['id'];
                $filePath = $this->DocumentPdf($data_env_view, $views_mt,$values['company']['name']);
                $this->allpdf[] = $filePath;
            }
            $email = Mail::to($data_email_pdf['body']['user']['email'])->send(new EnviarEmail($data_env_view, $this->allpdf));

            return $email; 
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

}
