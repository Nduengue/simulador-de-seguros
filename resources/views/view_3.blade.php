<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulação Vida Crédito Consumo</title>
    <style>
        /* @page {
            margin: 0;
            size: A4;
        }
        html{
            width: 210mm;
            height: 297mm;
            margin: auto;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #f5f5f5;
        } */
        @page {
            size: A4;
            margin: 0;
        }

        html {
            width: 210mm;
            height: 297mm;
            margin: auto;
            background-color: #333;
        }

        body {
            font-family: 'Arial', sans-serif;
            padding: 0;
            margin: 0;
            height: 100VH;
            background-color: #fff;
        }

        .certificate {
            box-sizing: border-box;
            page-break-after: always;
            height: 100%;
        }

        .container {
            box-sizing: border-box;
            page-break-after: always;
            /*  width: 100%; */
            /* margin: 20px auto; */
            background-color: #fff;
            padding: 20px;
            height: auto;
            /* border: 1px solid #ddd; */
            /* border-radius: 8px; */
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .left-info {
            text-align: left;
        }

        .right-info {
            text-align: right;
        }

        .right-info img {
            width: 150px;
        }

        .section {
            margin-bottom: 20px;
        }

        .section-title {
            font-weight: bold;
            background-color: #f5f5f5;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        .section-content {
            padding: 10px;
        }

        .section-content table {
            width: 100%;
            border-collapse: collapse;
        }

        .section-content table td {
            padding: 10px;
            border: 1px solid #ddd;
        }

        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f5f5f5;
            border-top: 1px solid #ddd;
            margin-top: 20px;
        }

        .bold {
            font-weight: bold;
        }

        .red {
            color: red;
        }

        .right {
            text-align: right;
        }

        p {
            font-size: 0.9em;
        }
    </style>
</head>
</head>

<body>
    <div class="container">
        <div class="header">
            <div class="left-info">
                <p>Data da Simulação: {{ $dados['data_atual'] }}</p>
                <p>Código da Simulação: 12100000000000106493</p>
                <p>Código do Mediador: 100</p>
            </div>
            <div class="right-info">
                <img src="img/logo fidelidade-Photoroom.png" alt="SFFS">
                <p class="red bold">SIMULAÇÃO VIDA CRÉDITO CONSUMO</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">PESSOA SEGURA</div>
            <div class="section-content">
                <table>
                    <tr>
                        <td class="bold">Nome:</td>
                        <td>{{ $dados['user']['name'] }}</td>
                    </tr>
                    <tr>
                        <td class="bold">Data Nascimento:</td>
                        <td>{{ $dados['user']['birth_date'] }}</td>
                    </tr>
                    <tr>
                        <td class="bold">Idade na Data Início do Seguro:</td>
                        <td>{{ $dados['idade'] }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">DADOS DA APÓLICE</div>
            <div class="section-content">
                <table>
                    <tr>
                        <td class="bold">Data Início:</td>
                        <td>{{ $dados['data_inicio'] }}</td>
                        <td class="bold">Hora Início:</td>
                        <td>{{ $dados['hora_inicio'] }}</td>
                    </tr>
                    <tr>
                        <td class="bold">Data Termo:</td>
                        <td>{{ $dados['data_termo'] }}</td>
                        <td class="bold">Prazo:</td>
                        <td>{{ $dados['coverage_duration'] }} Meses</td>
                    </tr>
                    <tr>
                        <td class="bold">Fracionamento:</td>
                        <td>Único</td>
                        <td class="bold">Cobrador:</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">GARANTIAS E CAPITAIS</div>
            <div class="section-content">
                <table>
                    <tr>
                        <td class="bold">Garantias Contratadas:</td>
                        <td>COBERTURA EM CASO DE MORTE</td>
                    </tr>
                   
                        @foreach ($dados['coverages'] as $coverage)
                            <tr>
                                <td class="bold">{{ $coverage['name'] }}</td>
                                <td>{{ $dados['coverage_value'] }} AOA</td> 
                            </tr>
                        @endforeach
                   
                    <tr>
                        <td class="bold">Capital:</td>
                        <td>{{ $dados['coverage_value'] }} AOA</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">GARANTIAS E CAPITAIS</div>
            <div class="section-content">
                <table>
                    <tr>
                        <td class="bold">Garantias Contratadas:</td>
                        <td>AGRAVAMENTOS EM CASO DE MORTE</td>
                    </tr>
                    
                        @foreach ($dados['aggravations'] as $aggravation)
                            <tr>
                                <td class="bold">{{ $aggravation['name'] }}</td>
                                <td>{{ $dados['coverage_value'] }} AOA</td> 
                            </tr>
                        @endforeach
                    
                    <tr>
                        <td class="bold">Capital:</td>
                        <td>{{ $dados['coverage_value'] }} AOA</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">PRÊMIO</div>
            <div class="section-content">
                <table>
                    <tr>
                        <td class="bold">Prêmio Total Único:</td>
                        <td>{{$dados['preco_apagar']}} AOA</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section">
            <div class="section-title">INFORMAÇÃO IMPORTANTE</div>
            <div class="section-content">
                <p>A importância do prêmio tem unicamente valor informativo. Esta simulação não é considerada proposta
                    ou oferta de seguros por parte da seguradora, não constituindo obrigação contratual para qualquer
                    das partes. Prêmio calculado de acordo com as características do risco e as circunstâncias pessoais
                    declaradas pelo proponente, de acordo com as taxas actuais à data da presente simulação...</p>
            </div>
        </div>
    </div>

    <!-- <div class="footer">
        <p>&copy; 2024 SFFS Seguros. Todos os direitos reservados.</p>
    </div> -->
</body>

</html>