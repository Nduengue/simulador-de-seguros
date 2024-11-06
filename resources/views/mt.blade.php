<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposta de Seguro de Responsabilidade Civil</title>
    <style>
        @page {
            margin: 0;
        }

        html {
            width: 210mm;
            margin: auto;
            background-color: #333;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12pt;
            font-weight: 50;
            padding: 0;
            margin: 0;
            background-color: #fff;
            color: #595959;
            box-sizing: border-box;
            page-break-after: always;
            position: relative;
        }

        .cover {
            position: relative;
            width: 210mm;
            height: 297mm;
            background-image: url('img/bg1.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            page-break-after: always;
        }

        .cover .title {
            font-family: 'Times New Roman', Times, serif;
            font-size: 16pt;
            position: absolute;
            width: 300px;
            align-items: center;
            color: #fff;
            font-weight: bold;
            left: 80px;
            bottom: 340px;
        }

        header {
            width: 100%;
            position: fixed;
            top: 30px;
            left: 0;
            z-index: 1000;
        }

        header>div {
            width: 100%;
            width: 210mm;
            margin: auto;
            top: 30px;
            left: 80px;
        }

        header img {
            width: 400px;
            margin-left: 80px;
        }

        .page-break {
            page-break-before: always;
        }

        section {
            padding: 0 20.5mm 55mm 20.5mm;
            line-height: 1.6;
            position: relative;
            box-sizing: border-box;
            top: 100px;
            bottom: 500px;
        }

        article {
            margin-top: 20px;
            /*page-break-inside: avoid;*/
        }

        .article-title {
            font-family: 'Times New Roman', Times, serif !important;
            font-size: 12pt;
            font-weight: bold;
            color: #404040;
            height: 50px;
            background-image: url('img/gg3.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        .article-content {
            text-align: justify;
        }

        .article-content ul {
            margin: 0;
            padding: 0;
            padding-left: 62px;
            padding-right: 20px;
        }

        .page-number {
            position: fixed;
            bottom: 10mm;
            right: 10mm;
            font-size: 12px;
        }

        .ul {
            display: block;
        }

        .ul>.li {
            /*font-weight: bold;*/
            list-style: none;
        }

        footer {
            width: 100%;
            height: 80px;
            color: #fff;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            z-index: 1000;
            font-size: 7pt;
            text-align: left;
        }

        footer div.ff {
            width: 210mm;
            margin: auto;
        }

        footer div.ff>div {
            margin: auto;
            width: 605px;
            height: 37px;
            left: 100px;
            padding: 0 33px;
            background-color: #89cce4;
            border-radius: 0 40px 40px 25px;
            padding-top: 5px;
        }

        footer p {
            margin: 0;
        }

        footer>p {
            margin-top: 5px;
        }

        .m-0 {
            margin: 0 !important;
        }

        .pt-0 {
            padding-top: 0 !important;
        }

        .spacoo {
            margin-left: 1rem;
            margin-top: 5rem;
        }
    </style>
</head>

<body>

    <div class="cover">
        <div class="title">
            SEGURO MERCADORIAS
            TRANSPORTADAS
            COTAÇÃO
        </div>
    </div>

    <header>
        <div>
            <img src="img/ff.png" alt="">
        </div>
    </header>

    <!-- Primeira Página -->
    <!-- Corpo do PDF -->
    <section>

        <article class="m-0 pt-0">
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">1</span>
                    <span class="text" style="margin-left: 25px;">DADOS DO TOMADOR SEGURO E SEGURO</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">Alonsuus, Lda. <br>
                        Luanda – Angola. </li>

                    <li class="li"> {{ $dados['user']['name'] }} </li>
                    <li class="li"> {{ $dados['user']['nif'] }} </li>
                    <li class="li"> {{ $dados['user']['email'] }} </li>
                    <li class="li"> {{ $dados['user']['birth_date'] }} </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">2</span>
                    <span class="text" style="margin-left: 25px;">OBJECTO DO CONTRATO</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">A presente proposta de seguro determina a obrigação de indemnizar até ao
                        montante do capital seguro, as perdas ou danos, decorrentes de qualquer
                        acontecimento de carácter fortuito, súbito e imprevisto, susceptível de fazer
                        funcionar as garantias do Contrato.</li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">3</span>
                    <span class="text" style="margin-left: 25px;">TIPO DE MERCADORIA</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">{{ $dados['merchandise']['name'] }}</li>
                    <li class="li">
                        3.1. Matérias inflamáveis em cisterna ou garrafas em vasilhames próprio e adequado
                        ao transporte terrestre;
                    </li>
                    <li class="li">3.2. Carga Geral em contentor, incluindo carga destinada à actividade petrolífera;
                    </li>
                    <li class="li">3.3. Carga a granel e não em contentor.</li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">4</span>
                    <span class="text" style="margin-left: 25px;">PARTICIPAÇÃO DOS TRANSPORTES</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">O Tomador de Seguro obriga-se a declarar todo e qualquer transporte das
                        mercadorias acima indicadas, mediante o preenchimento e entrega de um
                        Certificado de Aplicação, sempre antes do início da viagem, dependendo a
                        validade do seguro do cumprimento estrito de tal obrigação. No referido
                        Certificado de Aplicação devem constar os montantes transportados, que,
                        desde que referido no Certificado, podem incluir 10% para lucros esperados,
                        a data de início do transporte e a origem.
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">5</span>
                    <span class="text" style="margin-left: 25px;">ÂMBITO TERRITORIAL</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">

                    @foreach ($dados['ways']['options'] as $way_options)
                        <li class="li">{{ $way_options['name'] }}</li>
                    @endforeach
                    <li class="li">As garantias do presente contrato são válidas em caso de sinistro ocorrido
                        em transporte aéreos, marítimo e terrestre efectuado entre Lisboa - Portugal
                        / Luanda-Angola.</li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">6</span>
                    <span class="text" style="margin-left: 25px;"> PERÍODOS E DATAS</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">Início do Seguro: Considera-se como início do risco, as 0:00h do dia
                        seguinte ao informado pelo cliente;
                        Duração: Anual;
                        Períodos: Múltiplos;
                        Locais definidos para
                        início e termo do
                        trânsito:
                        Armazém | Armazém.
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">7</span>
                    <span class="text" style="margin-left: 25px;">GARANTIAS DO CONTRATO</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li"><span>Nos termos e até aos limites fixados nas Condições Particulares da
                            Apólice é
                            garantido o pagamento da indemnização ao Tomador do Seguro pelos riscos
                            contratados, de acordo com as Condições Gerais aplicáveis, nos termos
                            seguintes:
                             SEGURO DE CARGA - CLÁUSULA (C) </span></li>
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">8</span>
                    <span class="text" style="margin-left: 25px;">EXCLUSÕES GERAIS</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li"><span>Nos termos e até aos limites fixados nas Condições Particulares da
                            Apólice é
                            garantido o pagamento da indemnização ao Tomador do Seguro pelos riscos
                            contratados, de acordo com as Condições Gerais aplicáveis, nos termos
                            seguintes:
                             SEGURO DE CARGA - CLÁUSULA (C) </span></li>
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">4</span>
                    <span class="text" style="margin-left: 25px;">VALORES SEGUROS</span>
                </div>
            </div>
            <div class="article-content">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="text-align: left; padding: 10px; border: none;">{{ $dados['value'] }}</td>
                        <td style="text-align: right; padding: 10px; border: none;">{{ $dados['duraction'] }}</td>
                    </tr>
                </table>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">13</span>
                    <span class="text" style="margin-left: 25px;">OUTRAS INDICAÇÕES / PROCEDIMENTOS</span>
                </div>
            </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li">A Apólice funciona com emissão de Certificados de Transporte e emitidos pela
                        Seguradora.
                        O Certificado será emitido no mínimo, no dia do início do transporte (na data em
                        que a mercadoria saí do armazém do fornecedor).
                        Será enviado por email para os seguintes e-mails:
                        Seguradora: Operacoes@globalseguros.ao
                        No caso do valor a transportar exceder o limite seguro por transporte do
                        contravalor já referidos no ponto 13, o certificado deverá ser emitido com uma
                        antecedência mínima de 5 dias úteis.
                        Procedimento de emissão de recibos:
                        13.1. Mensalmente será elaborado pelo corretor um mapa, com as informações
                        de cada transporte/certificado efectuado.</li>
                    <li>13.2. Este mapa ser-vos-á enviado por email, para vossa conferência. Deverá nos
                        ser informado, por email, num prazo máximo de 5 dias, se está ou não em
                        conformidade com os vossos registos.
                        13.3. O Prémio Estimado será cobrado no início de cada anuidade, sendo
                        posteriormente ajustado no fim de cada anuidade, através da operação Taxa Total
                        (no ponto 12) * Total do Valor Transportado anual (no ponto 13.1) havendo lugar
                        à emissão de recibo suplementar sempre que o resultado for superior ao
                        inicialmente cobrado.</li>
                    </li>
                </ul>
            </div>
        </article>

        <article>
            <div class="article-title">Total: </div>
            <div class="article-content">
                <ul class="ul">
                    <li class="li"></li>
                </ul>
            </div>
        </article>

    </section>

    <footer>
        <div class="ff">
            <div>
                <!-- <p>© 2024 Nome da Empresa - Todos os direitos reservado</p> -->
                <p>Travessa Ho Chi Minh. Empreendimento Comandante Gika.</p>
                <div>
                    <span>Edifício Garden Towers, Torre B, Piso 13 - Alvalade - Luanda - Angola</span>
                    <span style="float: right;">www.globalseguros.ao</span>
                </div>
                <p>Tel +244 923 166 900 | Email: apoio.cliente@globalseguros.ao | NIF: 5401152949</p>
            </div>
        </div>
    </footer>

</body>

</html>