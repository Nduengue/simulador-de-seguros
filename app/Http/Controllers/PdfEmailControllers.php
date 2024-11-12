<?php

namespace App\Http\Controllers;

use App\Mail\EnviarEmail;
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
               
                $data_pdf = (new DadosPdfContrlloers)->DadosPdfLife(
                    $data_site_pdf,
                    $values['coverages_rates']['rates'],
                    $values['aggravations_rates']['rates']
                );

                $data_env_view = [
                    'nome' => "Lopes Raimundo Cristovao",
                    'texto' => "Olá, tudo bem?",
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
                $views_life = "life.life_".$values['company']['id'];
                $filePath = $this->DocumentPdf($data_env_view, $views_life,$values['company']['name']);
                $this->allpdf[] = $filePath;
            }

            $email = Mail::to($data_site_pdf['email'])->send(new EnviarEmail($data_env_view, $this->allpdf));

            return $email; 
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }


  /*   public function DocumentEmailPdfMT($dados,$view,$name){
        // Carregue a view que você deseja transformar em PDF
        $pdf = PDF::loadView( 'mt.mt_'.$view, ['date' => $dados]);

        // Salve o PDF em um local temporário
        $filePath = storage_path('app/public/'.$name.'.pdf');
        $pdf->save($filePath);

        return $filePath;
    } */
    public function PdfEmailMt($data_mt_pdf){
        try {

            foreach ($data_mt_pdf['body']['company_simulations'] as $values) {

                $data_pdf = (new DadosPdfContrlloers)->DadosPdfMt($data_mt_pdf);
               
                $data_env_view = [
                    'nome' => "Lopes Raimundo Cristovao",
                    'texto' => "Olá, tudo bem?",
                    'user' => $data_mt_pdf['body']['user'],

                    'merchandise'=> $data_mt_pdf['body']['merchandise'],
                    'packaging'=> $data_mt_pdf['body']['packaging'],
                    'coverage'=>$data_mt_pdf['body']['coverage'],   
                    'ways'=> $data_mt_pdf['body']['ways'],
                    'countries_from'=> $data_mt_pdf['body']['countries_from'],
                    'countries_to'=> $data_mt_pdf['body']['countries_to'],
                    'states_from'=> $data_mt_pdf['body']['states_from'],
                    'states_to'=> $data_mt_pdf['body']['states_to'],

                    'idade' => $data_pdf['idade'],
                    'dataAtual' => $data_pdf['dataAtual'],
                    'data_inicio' => $data_pdf['data_inicio'], // Data de início
                    'hora_inicio' => $data_pdf['horaAtual'], // Hora de início
                    'data_termo' => $data_pdf['dataTermino'], // Data de término
                    'data_atual '=> $data_pdf['dataAtual'], // Data atual
                    'preco_apagar' => $data_pdf['count_formatted'], // Preço a pagar
                    'coverage_duration' => $data_mt_pdf['duration'],
                    'coverage_value' => $data_pdf['coverage_value'], 
                ];
                $views_mt = "mt.mt_".$values['company']['id'];
                $filePath = $this->DocumentPdf($data_env_view, $views_mt,$values['company']['name']);
                $this->allpdf[] = $filePath;
            }
            $email = Mail::to($data_mt_pdf['body']['user']['email'])->send(new EnviarEmail($data_env_view, $this->allpdf));

            return $email; 
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
