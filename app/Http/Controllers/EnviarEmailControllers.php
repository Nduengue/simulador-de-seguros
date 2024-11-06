<?php

namespace App\Http\Controllers;

use App\Mail\EnviarEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use App\Http\Controllers\DadosPdfContrlloers;

class EnviarEmailControllers extends Controller
{
    public function DocumentPdf($dados,$value,$name)
    {
        // Carregue a view que você deseja transformar em PDF
        $pdf = PDF::loadView( $value, ['dados' => $dados]);

        // Salve o PDF em um local temporário
        $filePath = storage_path('app/public/'.$name.'.pdf');
        $pdf->save($filePath);

        return $filePath;
    }

    public function EnviarEmail($data, $email, $coverage_value, $coverage_duration)
    {
        try {
                $idade = Carbon::parse($data['user']['birth_date'])->age;
                $allpdf = [];  // Inicializa um array para armazenar os PDFs codificados

                foreach ($data['company_simulations'] as $value) {

                    $dados = [];

                    $dados_pdf = (new DadosPdfContrlloers)->DadosPdf( 
                        $value['coverages'], 
                        $value['aggravations'],
                        $coverage_value, $coverage_duration
                    );

                    $dados = [
                        'nome' => "Lopes Raimundo Cristovao",
                        'texto' => "Olá, tudo bem?",
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

                    $filePath = $this->DocumentPdf($dados, $value['company']['id'],$value['company']['name']);
                    $allpdf[] = $filePath;
                }

                $email = Mail::to($email)->send(new EnviarEmail($dados, $allpdf));

            return $email;
        } catch (\Exception $e) {
            // Retorne o erro, isso ajudará a diagnosticar o problema
            return response()->json(['success' => false, 'mensagem' => 'Erro ao enviar e-mail: ' . $e->getMessage()]);
        }

    }
}
