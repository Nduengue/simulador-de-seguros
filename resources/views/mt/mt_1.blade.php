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
            margin-top: 14px;
            /*page-break-inside: avoid;*/
        }

        .article-title {
            font-family: 'Times New Roman', Times, serif !important;
            font-size: 12pt;
            font-weight: bold;
            color: #1F3864;
            height: 50px;
            background-image: url('img/gg3.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin-bottom: 7px;
            page-break-inside: avoid;

        }

        .article-content {
            text-align: justify;
        }

        .page-number {
            position: fixed;
            bottom: 10mm;
            right: 10mm;
            font-size: 12px;
        }

        .article-content .follow-up {
            display: block;
            margin: 0;
            padding: 0;
            margin-left: 59px;
            margin-right: 19px;
        }

        table td {
            padding: 0;
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

        .w-100 {
            width: 100%;
        }

        .text-right {
            text-align: right;
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
                <div class="follow-up">
                    {{ $dados['user']['name'] }}
                </div>
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
                <div class="follow-up">
                    A presente proposta de seguro determina a obrigação de indemnizar até ao
                    montante do capital seguro, as perdas ou danos, decorrentes de qualquer
                    acontecimento de carácter fortuito, súbito e imprevisto, susceptível de fazer
                    funcionar as garantias do Contrato.
                </div>
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
            <div class="article-content" style="padding-left: 20px;">
                <table>
                    <tbody>
                        <tr>
                            <td style="vertical-align: text-top; padding-right: 20px;">3.1.</td>
                            <td>
                                {{ $dados['merchandise']['name'] }} - {{ $dados['packaging']['name'] }};
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                <div class="follow-up">
                    O Tomador de Seguro obriga-se a declarar todo e qualquer transporte das
                    mercadorias acima indicadas, mediante o preenchimento e entrega de um
                    Certificado de Aplicação, sempre antes do início da viagem, dependendo a
                    validade do seguro do cumprimento estrito de tal obrigação. No referido
                    Certificado de Aplicação devem constar os montantes transportados, que,
                    desde que referido no Certificado, podem incluir 10% para lucros esperados,
                    a data de início do transporte e a origem.
                </div>
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
                <div class="follow-up">
                    As garantias do presente contrato são válidas em caso de sinistro ocorrido
                    em transporte

                    @foreach ($dados['ways']['options'] as $options)
                        {{ $options['name'] }},
                    @endforeach

                    @foreach ($dados['states_from']['options'] as $options)
                        {{ $options['name'] }},
                    @endforeach
                    -
                    efectuado entre
                    @foreach ($dados['countries_from']['options'] as $options)
                        {{ $options['name'] }},
                    @endforeach

                    /

                    @foreach ($dados['states_to']['options'] as $options)
                        {{ $options['name'] }},
                    @endforeach

                    -

                    @foreach ($dados['countries_to']['options'] as $options)
                        {{ $options['name'] }},
                    @endforeach

                </div>
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
                <div class="follow-up">
                    <table class="table-dates w-100">
                        <tbody>
                            <tr>
                                <td style="vertical-align: top; text-align: left;">Início do Seguro:</td>
                                <td class="text-right">
                                    Considera-se como início do risco, as 0:00h do dia
                                    <br>seguinte ao informado pelo cliente;
                                </td>
                            </tr>
                            <tr>
                                <td>Duração:</td>
                                <td class="text-right">
                                    @if (isset($dados['duration']))
                                        Temporria;
                                    @else
                                        Anual;
                                    @endif
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>Períodos:</td>
                                <td class="text-right">
                                    Múltiplos;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Locais definidos para <br>
                                    início e termo do <br>
                                    trânsito:
                                </td>
                                <td style="vertical-align: top;" class="text-right">
                                    {{ $dados['origin'] }} | {{ $dados['destination'] }}.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                <div class="follow-up">
                    Nos termos e até aos limites fixados nas Condições Particulares da
                    Apólice é
                    garantido o pagamento da indemnização ao Tomador do Seguro pelos riscos
                    contratados, de acordo com as Condições Gerais aplicáveis, nos termos
                    seguintes:
                    <ul style="margin: 0;">
                        <li>
                            SEGURO DE CARGA -{{ $dados['coverage']['name'] }}
                        </li>
                    </ul>
                </div>
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
                <div class="follow-up">
                    Conforme Exclusões constantes das Condições Gerais – Mercadorias
                    Transportadas, ficheiro anexo.
                    Exclusões aplicáveis a todo e qualquer transporte:
                    <ul style="margin: 0;">
                        <li>Institute. Radio active Contamination Exclusion Clause;</li>
                        <li>Rust Oxidation Discoloration Exclusion Clause;</li>
                        <li>Warand Strikes;</li>
                        <li>
                            Transportes efectuados em navios que não se encontrem devidamente
                            classificados segundo a “Institute Classification Clause” e certificados
                            pelo SMC (Safety Management Certificate), ao abrigo do Código ISM.
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">9</span>
                    <span class="text" style="margin-left: 25px;">VALOR MÁXIMO POR VIAGEM</span>
                </div>
            </div>
            <div class="article-content" style="padding-left: 20px;">
                <table>
                    <tbody>
                        <tr>
                            <td style="vertical-align: text-top; padding-right: 20px;">9.1.</td>
                            <td>
                                {{ $dados['merchandise']['name'] }} - {{ $dados['packaging']['name'] }} - AOA 
                                {{ $dados['value'] }};
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">10</span>
                    <span class="text" style="margin-left: 25px;">FRANQUIA</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    {{ $dados['franchise'] }} dos prejuízos indemnizáveis, no mínimo de AOA 1 000 000,00.
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">11</span>
                    <span class="text" style="margin-left: 25px;">PRÉMIO ESTIMADO</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    <ul style="margin: 0; padding:0; list-style-type: none;">
                        <li>Fracionamento Semestral: AOA 7 083 145,80;</li>
                        <li>Premio Anual Não Estornável: AOA {{ $dados['preco_apagar'] }} </li>
                    </ul>
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">12</span>
                    <span class="text" style="margin-left: 25px;">TAXA TOTAL</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Taxa Total: {{ $dados['taxa_total'] }}% aplicável ao valor transportado por transporte e viagem
                </div>
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
            <div class="article-content" style="padding-left: 20px;">
                <table>
                    <tbody>
                        <tr>
                            <td style="vertical-align: text-top;">.</td>
                            <td>
                                A Apólice funciona com emissão de Certificados de Transporte e emitidos pela
                                Seguradora.
                                O Certificado será emitido no mínimo, no dia do início do transporte (na data em
                                que a mercadoria saí do armazém do fornecedor).
                                Será enviado por email para os seguintes e-mails:
                                Seguradora: <a href="Operacoes@globalseguros.ao">Operacoes@globalseguros.ao</a>
                                No caso do valor a transportar exceder o limite seguro por transporte do
                                contravalor já referidos no ponto 13, o certificado deverá ser emitido com uma
                                antecedência mínima de 5 dias úteis.
                                Procedimento de emissão de recibos:
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">13.1.</td>
                            <td>
                                Este mapa ser-vos-á enviado por email, para vossa conferência. Deverá nos
                                ser informado, por email, num prazo máximo de 5 dias, se está ou não em
                                conformidade com os vossos registos.
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">13.3.</td>
                            <td>
                                O Prémio Estimado será cobrado no início de cada anuidade, sendo
                                posteriormente ajustado no fim de cada anuidade, através da operação Taxa Total
                                (no ponto 12) * Total do Valor Transportado anual (no ponto 13.1) havendo lugar
                                à emissão de recibo suplementar sempre que o resultado for superior ao
                                inicialmente cobrado.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">14</span>
                    <span class="text" style="margin-left: 25px;">ANULAÇÕES DE CERTIFICADOS</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Sempre que um certificado seja anulado ou inutilizado deverá ser dado de
                    imediato conhecimento desse facto à seguradora, utilizando os mesmos
                    contactos de email já referidos no ponto 13 dos Procedimentos de actuação para
                    os seguros de transporte
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">15</span>
                    <span class="text" style="margin-left: 25px;">OUTRAS CONDIÇÕES</span>
                </div>
            </div>
            <div class="article-content">
                <ul>
                    <li>
                        Obrigações do Destinatário dos Bens Seguros
                        Em caso de avaria, e sem prejuízo da vistoria a realizar nos termos previstos
                        nas Condições Gerais, o destinatário dos bens seguros, obriga-se a
                        apresentar imediata reclamação à entidade transportadora, dentro dos prazos
                        estabelecidos nas disposições contratuais ou nos regulamentos aplicáveis em
                        vigor, à data da ocorrência, não devendo receber os bens danificados,
                        enquanto esse facto não for devidamente certificado num documento escrito
                        e assinado pelo representante dessa entidade, sem o qual não poderá
                        efectuar qualquer reclamação ao abrigo desta cobertura. O não cumprimento
                        destas disposições isenta a Seguradora de qualquer responsabilidade em
                        caso de sinistro;

                    </li>
                    <li>
                        Esta proposta tem a validade de 30 dias.
                    </li>
                </ul>
            </div>
        </article>

        <p class="p-date-time text-right">Luanda, {{ $dados['data'] }}</p>

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