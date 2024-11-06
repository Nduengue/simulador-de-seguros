<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Log;
class EnviarEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $dados;
    public $filePaths = [];

    public function __construct($dados,$filePathss)
    {
        $this->dados = $dados;
        $this->filePaths = $filePathss;
    }

    public function build()
    {
        $email = $this->from('tiloypedro@gmail.com')
            ->subject('Assunto do Email')
            ->markdown('email')
            ->with('dados', $this->dados);

            if (is_array($this->filePaths)) {
                
                foreach ($this->filePaths as $key=>$filePath) {
                    
                    if (file_exists($filePath)) {
                        Log::info("Anexando arquivo: $key $filePath");
                        $email->attach($filePath);
                    }
                }
            }
        return $email;
    }
}
