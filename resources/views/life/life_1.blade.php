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
                <p><strong>Agente Produtor:</strong> 000</p>
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
                                <p style="margin:0;">XXXXX XXXXXX XXXX</p>
                            </th>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Ramo</strong>
                                <p style="margin:0;">XXXXXX XXXXX XXXXXX</p>
                            </td>
                            <td>
                                <strong>Simulação Nº</strong>
                                <p style="margin:0;">{{ $dados['codigo'] }}</p>
                            </td>
                            <td>
                                <strong>Data Simulação:</strong>
                                <p style="margin:0;">{{ $dados['data_inicio'] }}</p>
                            </td>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Duração</strong>
                                <p style="margin:0;">{{ $dados['coverage_duration'] }} Meses</p>
                            </td>
                            <td>
                                <strong>Data Fim:</strong>
                                <p style="margin:0;">{{ $dados['data_termo'] }}</p>
                            </td>
                            <td>
                                <p style="margin:0;"> </p>
                            </td>
                        </tr>
                        <tr class="tabela_row">
                            <td>
                                <strong>Prêmio Único</strong>
                                <p style="margin:0;">{{$dados['preco_apagar']}} AOA</p>
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
                                <p style="margin: 0; padding: 0;">{{ $dados['user']['name'] }}</p>
                            </td>
                            <td style="margin: 0; padding: 0;">
                                <strong>Data de nascimento:</strong>
                                <p style="margin: 0; padding: 0;">{{ $dados['user']['birth_date'] }}</p>
                            </td>
                        </tr>
                        <tr style="border: none; margin: 0; padding: 0;">
                            <td style="margin: 0; padding: 0;">
                                <strong>Sexo:</strong>
                                <p style="margin: 0; padding: 0;">
                                    @if ($dados['user']['gender'] == 'M')
                                        Maculino
                                    @endif
                                    @if ($dados['user']['gender'] == 'F')
                                        Feminino
                                    @endif
                                </p>
                            </td>
                            <td style="margin: 0; padding: 0;">
                                <strong>Valor Crédito:</strong>
                                <p style="margin: 0; padding: 0;"> </p>
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

                        @foreach ($dados['coverages'] as $coverage)
                            <tr style="border: none; margin: 0; padding: 0;">
                                <td style="border: none; margin: 0; padding: 0;">{{ $coverage['name'] }}</td>
                                <td style="border: none; margin: 0; padding: 0;">{{ $dados['coverage_value'] }},00 AKZ</td>
                            </tr>
                        @endforeach
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