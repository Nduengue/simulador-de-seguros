<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulação de Seguro</title>
    <link rel="stylesheet" href="/css/seg.css">
    <style>
        @page {
            size: A4;
            margin: 0;
        }

        html {
            margin: 0;
            width: 210mm;
            height: 297mm;
            margin: auto;
            background-color: #333;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            color: #000;
            margin: 0;
            padding: 10mm;
            height: 100%;
            line-height: 1.4;
            box-sizing: border-box;
            background-color: #fff;
        }

        .container {
            width: 100%;
            position: relative;
            page-break-before: avoid;
        }

        .header {
            width: 100%;
            height: 50px;
            padding-bottom: 10px;
            clear: bold;
            margin-bottom: 40px;
        }

        .div_img_texto img {
            width: 150px;
            height: auto;
            object-fit: cover;
            margin-right: 10px;
            float: left;
        }

        .titulo {
            text-align: right;
            font-weight: bold;
            float: right;
        }

        .titulo p {
            font-size: 12px;
            margin: 0;
        }

        .titulo div {
            margin-top: -5px;
            font-size: 12px;
        }

        section {
            margin-bottom: 8px;
        }

        .dados-tomador p {
            margin: 0;
        }

        h3 {
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 2px;
        }


        .aviso {
            font-size: 8px;
            text-align: left;
            margin-top: 10px;
            font-style: italic;
            word-wrap: break-word;
        }

        footer {
            position: fixed;
            width: 190mm;
            height: 150px;
            bottom: 0;
            padding-bottom: 20px;
        }

        footer .left_seguro {
            font-size: 9px;
        }



        footer .right_seguro a {
            color: #007bff;
            text-decoration: none;
        }

        
        table {
            border-collapse: collapse;
            /* Para garantir que a borda da tabela seja única */
            width: 100%;
            border: 0.5px solid black;
            /* Borda da tabela */
        }

        table th,
        td {
            padding: 8px;
            text-align: left;
        }

        /* Remover borda dos <tr> */
        table tr {
            border-bottom: 0.5px solid black;
        }

        .left_seguro {
            float: left;
        }

        .right_seguro {
            float: right;
        }

        .avviso {
            margin-bottom: 35px;
        }
    </style>
</head>

<body>
    <div class="container">
        <header class="header">
            <div class="div_img_texto">
                <img src="img/download (1)-Photoroom.png" alt="Logo da Fidelidade Seguros, estabelecida desde 1808" />
            </div>
            <div class="titulo">
                <p>SIMULAÇÃO</p>
                <div>VIDA CRÉDITO INDIVIDUAL</div>
            </div>
        </header>
        <main>
            <section class="dados-tomador">
                <h3>DADOS DO TOMADOR DE SEGURO</h3>
                <p><strong>Nome:</strong> </p>
                <p><strong>Cliente nº:</strong></p>
                <p><strong>NIF:</strong> </p>
                <p><strong>Doc Id.:</strong> </p>
                <p><strong>Tel:</strong> </p>
                <p><strong>Email:</strong></p>
                <p><strong>Agente Produtor:</strong> 1881</p>
            </section>

            <section class="dados-simulacao">
                <table class="table">
                    <tbody class="tabele_body">
                        <tr>
                            <th>
                                <strong>DADOS DA SIMULAÇÃO</strong>
                            </th>
                            <th></th>
                            <th>
                                <strong>Efectuado Por:</strong>
                                <p style="margin:0;">Jelson Pedro Costa</p>
                            </th>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Ramo</strong>
                                <p style="margin:0;">Jelson Pedro Costa</p>
                            </td>
                            <td>
                                <strong>Simulação Nº</strong>
                                <p style="margin:0;">12345</p>
                            </td>
                            <td>
                                <strong>Data Simulação:</strong>
                                <p style="margin:0;">2024-11-08</p>
                            </td>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Duração</strong>
                                <p style="margin:0;">12 meses</p>
                            </td>
                            <td>
                                <strong>Data Fim:</strong>
                                <p style="margin:0;">2025-11-08</p>
                            </td>
                            <td>
                                <p style="margin:0;"> </p>
                            </td>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Prêmio Único</strong>
                                <p style="margin:0;">100.000,00 AKZ</p>
                            </td>
                            <td>
                                <p style="margin:0;"> </p>
                            </td>
                            <td>
                                <p style="margin:0;"> </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>

            <section class="dados-pessoa-segura">
                <h3>PESSOA SEGURA</h3>

                <table style="border: none; margin: 0; padding: 0;">
                    <tbody>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="margin: 0; padding: 0;">
                                <strong>Nome:</strong>
                                <p style="margin: 0; padding: 0;">Lopes Raimundo Cristóvão</p>
                            </td>
                            <td style="margin: 0; padding: 0;">
                                <strong>Data de nascimento:</strong>
                                <p style="margin: 0; padding: 0;">1997-06-21</p>
                            </td>
                        </tr>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="margin: 0; padding: 0;">
                                <strong>Sexo:</strong>
                                <p style="margin: 0; padding: 0;">Masculino</p>
                            </td>
                            <td style="margin: 0; padding: 0;">
                                <strong>Valor Crédito:</strong>
                                <p style="margin: 0; padding: 0;">25.000.0000,00 AKZ</p>
                            </td>
                        </tr>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="margin: 0; padding: 0;">
                                <strong>Beneficiário</strong>
                                <p style="margin: 0; padding: 0;"></p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>

            <section class="cobertura">
                <table style="border: none; margin: 0; padding: 0; width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <th style="border: none; margin: 0; padding: 0;">Cobertura</th>
                            <th style="border: none; margin: 0; padding: 0;">Capital Seguro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="border: none; margin: 0; padding: 0;">Morte</td>
                            <td style="border: none; margin: 0; padding: 0;">25.000.000,00 AKZ</td>
                        </tr>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="border: none; margin: 0; padding: 0;">Invalidez Absoluta e Definitiva (IAD)</td>
                            <td style="border: none; margin: 0; padding: 0;">25.000.000,00 AKZ</td>
                        </tr>
                    </tbody>
                </table>

            </section>


        </main>

        <footer>
            <div class="avviso">
                <p class="aviso">
                    <strong>A presente simulação carece de confirmação dos dados inseridos e tem uma validade de 30
                        dias.
                        PÁG. 1/1</strong>
                </p>
            </div>
            <div>
                <div class="left_seguro">
                    <div>Global Seguros</div>
                    <div>
                        Travessa Ho Chi Minh, Empreendimento C, Gika, Edifício Garden Towers <br>
                        Torre B, Piso 13, Alvalade - Luanda, Angola <br>
                        Capital Social: 5.749.520.000 AKZ <br>
                        Tel: (+244) 923 166 900
                    </div>
                </div>

                <div class="right_seguro">
                    <p class="call-center">
                        CALL CENTER 923 166 900 <br>
                        <a href="http://www.globalseguros.ao" target="_blank">www.globalseguros.ao</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</body>

</html>


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
                <img src="img/GLOBAL SEGUROS-Photoroom.png" alt="SFFS">
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