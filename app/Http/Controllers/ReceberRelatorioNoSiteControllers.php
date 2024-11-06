<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use App\Http\Controllers\DadosPdfContrlloers;

class ReceberRelatorioNoSiteControllers extends Controller
{
    public function DomPdf($data, $coverage_value, $coverage_duration)
    {
        $idade = Carbon::parse($data['user']['birth_date'])->age;
        $allpdf = [];  // Inicializa um array para armazenar os PDFs codificados

        foreach ($data['company_simulations'] as $value) {

            $dados = []; 
            
            $dados_pdf = (new DadosPdfContrlloers)->DadosPdf( 
                $value['coverages'], 
                $value['aggravations'],
                $coverage_value, $coverage_duration
            );
           
            // Dados a serem enviados para o PDF
            $dados = [
                'coverages' => $value['coverages'],
                'aggravations' => $value['aggravations'],
                'user' => $data['user'],
                'idade' => $idade,
                'coverage_value' => $dados_pdf['coverage_value'],
                'coverage_duration' => $dados_pdf['coverage_duration'],
                'data_inicio' => $dados_pdf['dataAtual']->format('Y-m-d'), // Data de início
                'hora_inicio' => $dados_pdf['horaAtual'], // Hora de início
                'data_termo' => $dados_pdf['dataTermo'], // Data de término
                'dataa_atual' => $dados_pdf['dataAtual'], // Data atual
                'preco_apagar' => $dados_pdf['count_formatted'], // Preço a pagar
            ];

            // Carrega a view do PDF com os dados
            $pdf = PDF::loadView($value['company']['id'], ['dados' => $dados]);
            $pdfContent = $pdf->output();

            // Adiciona o PDF codificado ao array
            $allpdf[] = base64_encode($pdfContent);
        }

        // Retorna todos os PDFs codificados em Base64
        return $allpdf;
    }
}


