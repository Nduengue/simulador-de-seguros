<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulação de Seguro</title>
    <style>
        /** {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }*/
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
            width: 210mm;
            height: 297mm;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #fff;
            color: #333;
            line-height: 1.6;
            font-size: 10pt;
        }

        .container {
            margin: 0 auto;
            padding: 15mm;
            padding-top: 21px;
        }

        header {
            width: 100%;
            margin-bottom: 141px;
            clear: both;
        }

        header .div_img_texto {
            width: 50%;
            float: left;
            height: auto !important;
        }

        header .div_img_texto img {
            width: 300px;
            height: 100px;
            object-fit: cover;
            margin-right: 1px;
        }

        header h1 {
            font-size: 36px;
            color: #D63031;
        }

        header h2 {
            font-size: 14px;
            color: #D63031;
            margin-right: 10px;
            padding: 30px;
        }

        .simulation-info {
            float: right;

        }

        .simulation-info p {
            color: #D63031;
            font-weight: bold;
            text-align: right;
            padding: 25px;

        }

        section {
            margin-bottom: 10px;
            font-size: 13px;
            clear: both;
        }

        section h3 {
            padding: 0 5px;
            margin: 0;
            margin-bottom: 4px;
            font-size: 12px;
            background-color: #bdbdbd;
            border-radius: 4px;
        }

        section p {
            margin: 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table.second,
        table.second th,
        table.second td {
            border-bottom: 1px solid #ddd;
        }

        table.second th,
        table.second td {
            /*padding: 10px;*/
            text-align: left;
        }

        aside {
            position: fixed;
            bottom: 160px;
            left: 0;
            right: 0;
        }

        aside>div {
            width: 210mm;
            height: 10px;
            margin: auto;
        }

        aside>div>div {
            transform: rotate(-90deg);
            font-size: 10px;
            text-align: center;
            float: left;
            margin-left: -14mm;
        }

        footer {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 20px;
            clear: both;
        }

        footer>div {
            width: 210mm;
            margin: auto;
        }

        footer>div>div {
            padding: 0 15mm;
        }

        footer p {
            margin: 0;
            font-size: 10px;
            color: #555;
            padding: 0;
        }

        .text-center {
            text-align: center;
        }

        span.text-center {
            width: 100%;
            text-align: center;
        }

        .text-end {
            text-align: right;
        }
    </style>
</head>

<body>
    <div class="container">
        <header>
            <div class="div_img_texto">
                <img src="img/logo fidelidade-Photoroom.png" alt="Banner Seguro" /> <!-- Caminho para a imagem local -->
            </div>
            <div class="simulation-info div_img_texto">
                <p>SIMULAÇÃO<br>VIDA CRÉDITO CONSUMO</p>
            </div>
        </header>

        <section class="person-info">
            <div class="text-end" style="font-size: 10px; margin-bottom: 10px;">
                <span><strong>Data de Simulação: </strong>{{ $dados['data_atual'] }}</span>
                <span><strong>Código da Simulação: </strong>121000000000000106493</span>
                <span><strong>Código do Mediador: </strong>100</span>
            </div>
            <h3>PESSOA SEGURA</h3>
            <p><strong>Nome:</strong> {{ $dados['user']['name'] }} </p>
            <p><strong>Data Nascimento:</strong> {{ $dados['user']['birth_date'] }} </p>
            <p><strong>Idade na Data Início do Seguro:</strong>{{ $dados['idade'] }}</p>
        </section>

        <section class="policy-info">
            <h3><strong>DADOS DA APÓLICE</strong></h3>

            <table class="first">
                <tbody>
                    <tr>
                        <td><strong>Data Início: </strong>{{ $dados['data_inicio'] }}</td>
                        <td><strong>Hora Início: </strong>{{ $dados['hora_inicio'] }}</td>
                        <td><strong>Data Termo: </strong>{{ $dados['data_termo'] }}</td>
                    </tr>
                    <tr>
                        <td colspan="2"><strong>Prazo: </strong>{{ $dados['coverage_duration'] }} Meses</td>
                        <td><strong>Fracionamento: </strong>Único</td>
                    </tr>
                    <tr>
                        <td colspan="3"><strong>Cobrador: </strong>100</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="guarantees">
            <h3>GARANTIAS E CAPITAIS</h3>
            <table class="second">
                <thead>
                    <tr>
                        <th>Garantias Contratadas</th>
                        <th>
                            <p class="text-center">Capital</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($dados['coverages'] as $coverage)
                        <tr>
                            <td>{{ $coverage['name'] }}</td>
                            <td>
                                <p class="text-end">{{ $dados['coverage_value'] }} AOA</p>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </section>

        <section class="premium">
            <h3>PRÊMIO</h3>
            <p class="text-end"><strong>Moeda: </strong> AOA</p>
            <table class="second">
                <thead>
                    <tr>
                        <th colspan="2">
                            <p class="text-end"><strong>Prêmio Total Único</strong></p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Prêmio Total Único: </strong></td>
                        <td>
                            <p class="text-end">{{$dados['preco_apagar']}} AOA</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="important-info">
            <h3>INFORMAÇÃO IMPORTANTE</h3>
            <p style="text-align: justify;">
                A importância do prêmio tem unicamente valor informativo. Esta simulação não é considerada proposta ou
                oferta de seguros por parte da seguradora, não constituindo obrigação contratual para qualquer das
                partes. Prêmio calculado de acordo com as características do risco e as circunstâncias pessoais
                declaradas pelo proponente, de acordo com as taxas atuais à data da presente simulação. O montante do
                prêmio é provisório. O prêmio final será conhecido na conclusão do processo de análise do pedido de
                seguro onde se inclui a declaração de saúde, questionário clínico, ou exames médicos (se aplicáveis), e
                qualquer outra documentação necessária para o processo. Esta cotação tem uma validade de 60 dias. Para
                aderir a este seguro é necessário ter idade igual ou inferior a 60 anos e não ultrapassar os 65 anos
                durante a vigência do contrato.
            </p>
        </section>

        <aside>
            <div>
                <div class="text">AO008 14/10/2024 13:59:35 FIN_AG1672</div>
            </div>
        </aside>

        <footer>
            <div>
                <div>
                    <p>
                        <strong>Fidelidade - Companhia de Seguros, S.A.</strong> • Sede: Via S8, Condomínio Cidade
                        Financeira, Bloco 10 - 3º Piso - Talatona - Luanda - Angola
                    </p>
                    <p>NIF: 5417081509 • Capital Social: 3.052.350.000,00 AOA • www.fidelidade.co.ao</p>
                </div>
            </div>
        </footer>
    </div>
</body>

</html>