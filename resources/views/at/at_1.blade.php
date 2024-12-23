<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        SEGURO DE ACIDENTES DE TRABALHO
        E DOENÇAS PROFISSIONAIS
        COTAÇÃO
    </title>
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

        .mt-0 {
            margin-top: 0 !important;
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
            SEGURO DE ACIDENTES DE TRABALHO
            E DOENÇAS PROFISSIONAIS
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
                    <span class="text" style="margin-left: 25px;">APRESENTAÇÃO</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    <p class="mt-0">Exmos. Srs.</p>
                    <p>A Global Seguros, Companhia Angolana de Seguros, S.A., agradece a V. Exas. a oportunidade de
                        apresentar uma Proposta de Cotação à <strong>{{ $dados['user']['name'] }}</strong>, referente ao
                        Seguro de Acidentes
                        de Trabalho e Doenças Profissionais.</p>
                    <p>Esperamos desta forma, ir ao encontro das expectativas da
                        <strong>{{ $dados['user']['name'] }}</strong> em que a Vossa
                        preferência muito nos honra. </p>
                    <p>Com os melhores cumprimentos.</p>
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
                    O seguro de Acidentes de Trabalho, obrigatório ao abrigo da Lei Angolana, tem por objectivo prevenir
                    e minorar as consequências de acidentes que possam ocorrer durante a actividade laboral, dando
                    protecção ao trabalhador e respectivo beneficiário, no local de trabalho e no trajecto entre o
                    domicílio e o local de trabalho.
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">3</span>
                    <span class="text" style="margin-left: 25px;">GARANTIAS DO CONTRATO</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    <p class="mt-0">O seguro garante as prestações legalmente devidas em caso de acidente de trabalho
                        que afecte
                        qualquer um dos seus Colaboradores, que conste nas folhas de férias, incluindo casos de
                        incapacidade
                        temporária ou permanente (absoluta ou parcial) e morte.</p>
                    <p>
                        3.1. Outras Garantias.
                    </p>
                    <p>
                        Subsídio de Morte: Seis (6) vezes a remuneração de referência ou retribuição mensal do
                        Sinistrado;
                    </p>
                    <p>
                        Subsídio por Despesas de Funeral: Duas (2) vezes a remuneração de referência ou retribuição
                        mensal do Sinistrado. Nos casos de haver Transladação do defunto, o Subsídio por Despesas de
                        Funeral é de Quatro (4) vezes a remuneração de referência ou retribuição mensal do Sinistrado;
                    </p>
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">4</span>
                    <span class="text" style="margin-left: 25px;">EXCLUSÕES</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    As contidas nas Condições Gerais da apólice.
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
                    O presente contrato apenas abrange os acidentes de trabalho que ocorram na República de Angola sem
                    prejuízo do seguinte.
                    Caso os acidentes de trabalho ocorram no estrangeiro e de que sejam vítimas trabalhadores angolanos
                    e trabalhadores estrangeiros residentes em Angola, ao serviço de uma empresa angolana, estão
                    cobertos por este contrato, salvo se a legislação do Estado onde ocorreu o acidente lhes reconhecer
                    o direito à reparação, caso em que o trabalhador poderá optar por qualquer dos regimes.

                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">6</span>
                    <span class="text" style="margin-left: 25px;">PERÍODO DO SEGURO</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Data início: A indicar
                    Período: Ano e Seguintes
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">7</span>
                    <span class="text" style="margin-left: 25px;">CAPITAL (MASSA SALARIAL MENSAL x 13)</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                {{ number_format(($dados['msm'] ?? 0) * 13, 2, ',', '.') }} AOA
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">8</span>
                    <span class="text" style="margin-left: 25px;">MODALIDADE DE SEGURO E CAE</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    <p class="mt-0">Acidentes de Trabalho Por Conta de Outrem – Prémio Variável (Folha de Férias)</p>

                    <p>
                        {{ $dados['activity']['code'] }} {{ $dados['activity']['name'] }}
                    </p>

                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">9</span>
                    <span class="text" style="margin-left: 25px;">PRÉMIO</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Prémio Anual: {{ number_format(($dados['msm'] ?? 0) * 13 * ($dados['activity_rate_value'] ?? 0), 2,',','.') }} AOA<br>
                    Prémio Semestral: {{ number_format((($dados['msm'] ?? 0) * 13 * ($dados['activity_rate_value'] ?? 0)) / 6, 2,',','.') }} AOA<br>
                    Prémio Trimestral: {{ number_format((($dados['msm'] ?? 0) * 13 * ($dados['activity_rate_value'] ?? 0)) / 4, 2,',','.') }} AOA<br>

                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">10</span>
                    <span class="text" style="margin-left: 25px;">TAXA TOTAL</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Taxa Encargos: 20,00% <br>
                    Taxa IVA: 14,00% (Imposto sobre o Valor Acrescentado)<br>
                    Taxa Simples: 3,096% <br>
                    Taxa Total: {{ number_format(($dados['activity_rate_value'] ?? 0), 2, ',', '.') }}%<br>

                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">11</span>
                    <span class="text" style="margin-left: 25px;">PRAZO DE VALIDADE</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Esta proposta tem a validade de 30 dias.
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">12</span>
                    <span class="text" style="margin-left: 25px;">COTAÇÃO Nº</span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    {{ $dados['codigo'] }}
                </div>
            </div>
        </article>

        <article>
            <div class="article-title">
                <div style="height: 10px;"></div>
                <div style="margin-left: 20px">
                    <span class="number">13</span>
                    <span class="text" style="margin-left: 25px;">SOLICITAÇÃO DAS CONDIÇÕES GERAIS</span>
                </div>
            </div>
            <div class="article-content" style="padding-left: 20px;">
                <table>
                    <tbody>
                        <tr>
                            <td style="vertical-align: text-top;">13.1.</td>
                            <td>
                                É mandatório que todos os Segurados ou Tomadores dos Seguros, solicitem e examinem as
                                Condições Gerais associadas ao seguro.
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">13.2.</td>
                            <td>
                                O acesso às Condições Gerais constitui um direito inalienável dos Segurados ou
                                Tomadores dos Seguros, e é fundamental para a compreensão integral da cobertura, das
                                restrições e dos deveres inerentes ao seguro.
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">13.3.</td>
                            <td>
                                Os Segurados ou Tomadores dos Seguros podem requerer as Condições Gerais através dos
                                meios de comunicação disponíveis.
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
            <div class="article-content" style="padding-left: 20px;">
                <table>
                    <tbody>
                        <tr>
                            <td style="vertical-align: text-top;">14.1.</td>
                            <td>
                                Envio da relação dos funcionários e suas respectivas massas salariais que trabalham com
                                matérias
                                perigosas ou que tenham alguma condição especial, caso se aplique;
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">14.2.</td>
                            <td>
                                A massa salarial acima mencionada, deve corresponder ao Total de Remuneração;
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">14.3.</td>
                            <td>
                                Em caso de extensão territorial, o Tomador, deverá comunicar a seguradora. A inclusão da
                                extensão
                                territorial irá gerar um prémio adicional;
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">14.4.</td>
                            <td>
                                Envio do certificado de sinistralidade referente aos últimos 3 anos;
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: text-top;">14.5.</td>
                            <td>
                                A taxa da proposta da presente cotação, poderá vir a ser alterada mediante o envio das
                                informações
                                acima solicitadas;
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
                    <span class="number">15</span>
                    <span class="text" style="margin-left: 25px;">DECLARAÇÃO DE ACEITAÇÃO </span>
                </div>
            </div>
            <div class="article-content">
                <div class="follow-up">
                    Declaro ter tomado conhecimento das condições acima apresentadas, e que aceito
                    subscrever o seguro de acordo as mesmas.
                </div>
            </div>
        </article>

        <p class="p-date-time text-right">
        <span>Luanda, {{ $dados['data'] }}</span>
        </p>

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