<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Giant</title>
    <style>
        @page {
            margin: 0;
        }

        html {
            width: 210mm !important;
            margin: auto;
            background-color: rgba(0, 0, 0, 0.9);
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 0;
            margin: 0;
            height: auto;
            padding: 10mm;
            background-color: #fff;
        }

        .watermark {
            font-family: 'Captura', sans-serif;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-60%, -10%) rotate(-50deg);
            font-size: 8rem;
            color: rgba(0, 0, 0, 0.1);
            pointer-events: none;
            z-index: 2;
            font-weight: bold;
        }

        .page {
            padding-top: 30px;
            box-sizing: border-box;
            position: relative;
            margin-bottom: 5mm;
        }

        header img {
            width: 180px;
            height: auto;
            object-fit: scale-down;
            margin-left: -26px;
            margin-top: -7px;
        }

        header .simulation-info {
            font-size: 14px;
            text-align: right;
            font-weight: bold;
            color: #333;
            margin-top: -38px;
            clear: both;
            height: 65px;
        }

        header .simulation-info>div {
            float: right;
            margin: 0;
            width: 49%;
            text-align: center;
        }

        header .simulation-info>div>div {
            float: left;
            margin: auto;
            margin-left: 10px;
        }

        .title {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            font-size: 12px;
            margin: 0;
            line-height: 1.5;
            padding-left: 130px;
        }

        .section_container {
            height: 225px;
            clear: both;
            width: 100%;
        }

        .section_container section {
            height: 181px;
        }

        .section_container section h5 {
            margin-top: 0;
            font-weight: bold;
        }

        .section_container .holder {
            float: left;
            width: 47%;
        }

        .section_container .simulation {
            float: right;
            width: 47%;
        }

        /**container da segunda página 2**/

        header img2 {
            width: 180px;
            height: auto;
            object-fit: scale-down;
            margin-left: -26px;
            margin-top: -70px;
        }

        header .simulation-info2 {
            font-size: 11px;
            text-align: right;
            font-weight: bold;
            color: #333;
            margin-top: -38px;
            clear: both;
            height: 65px;
        }

        .section_container .holder2 {
            font-size: 8px;
            float: left;
            width: 47%;
            height: 4%;
            margin: 5px;
            margin-left: -1px;
        }

        .section_container .simulation2 {
            font-size: 9px;
            float: right;
            width: 47%;
            height: 4%;
            margin: 5px;
            margin-left: 2px;
        }

        .section_container .simulation2>p,
        .section_container .holder2>p {
            font-size: 10px !important;
            margin: 0;
            padding: 0;
            margin-top: -4px;
        }

        .section_section2 {
            border: 1px solid #000;
            font-size: 10px;
            box-sizing: border-box;
            margin-top: -39px;
        }

        p {
            padding-left: 9px;
        }

        h4 {
            padding-left: 5px;
        }

        /**fim**/

        .section {
            border: 1px solid #000;
            padding: 7px;
            font-size: 12px;
            box-sizing: border-box;
        }

        .section h3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
            color: #333;
        }

        .section p,
        .section ul {
            font-size: 12px;
            margin: 0;
            line-height: 1.5;
            text-align: justify;
        }

        .section_section {
            border: 1px solid #000;
            padding: 7px;
            font-size: 12px;
            box-sizing: border-box;
        }

        .section_section h3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
            color: #333;
        }

        .section_section p,
        .section_section ul {
            font-size: 12px;
            margin: 0;
            line-height: 1.5;
            text-align: justify;
        }


        ul {
            padding-left: 20px;
        }

        hr {
            border: 0;
            height: 5px;
            background-color: #72727242;
            margin-top: 40px;
            margin-left: 5px;
        }

        .right2 {
            font-size: 10px;
            width: 40%;
            position: fixed;
            bottom: 115px;
            right: -10mm;
        }

        .right2 div {
            float: right;
            width: 40%;
            background-color: blue;
            text-align: right;
            bottom: 0;
        }

        .footer {
            position: fixed;
            bottom: 3px;
            width: 180mm;
            height: 100px;
            counter-reset: ;
        }

        .footer-footer {
            width: 100%;
            height: 70px;
            bottom: 6px;
            position: absolute;
            padding-right: 10mm;
            font-size: 10px;
            padding-bottom: 5mm;
            padding-top: 5mm;
        }

        .footer .footer-footer .left {
            float: left;
            width: 45%;
            margin-left: 5px;
        }

        .footer .footer-footer .right {
            float: right;
            text-align: right;
        }

        .footer .footer-footer img {
            height: 50px;
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <div class="watermark">SIMULAÇÃO</div>

    <div class="page">
        <header>
            <div>
                <img src="img/logo giant seguros.png" alt="d" />
            </div>
            <div class="simulation-info">
                <div>
                    <div>SIMULAÇÃO <br>VIDA CRÉDITO CONSUMO</div>
                </div>
            </div>
        </header>

        <div class="section_container" style="clear: both;">

            <h2 class="title"><strong>Angência:</strong> SEDE</h2>
            <section class="section holder">
                <h5><strong>TOMADOR DO SEGURO</strong></h5>
                <p><strong>Nome:</strong> {{ $dados['user']['name'] }} </p>
                <p><strong>Data de Nascimento:</strong> {{ $dados['user']['birth_date'] }}</p>
                <p><strong>Doc. Identificação:</strong> B.I</p>
                <p><strong>Referência:</strong> {{ $dados['user']['nif'] }}</p>
                <p><strong>Província:</strong> Luanda</p>
                <p><strong>Município:</strong> xxxxxxx</p>
                <p><strong>Bairro:</strong> xxxxxxx</p>
                <p><strong>Contacto:</strong> 900 000 000</p>
            </section>

            <section class="section simulation">
                <p><strong>Simulação Nº:</strong>{{ $dados['codigo'] }}</p>
                <p><strong>Acta Nº:</strong> XXXXX</p>
                <p><strong>Data de Emissão:</strong> {{ $dados['data_inicio'] }}</p>
                <p><strong>Ramo:</strong> VIDA CRÉDITO</p>
                <p><strong>Data de Vencimento:</strong>{{ $dados['data_termo'] }}</p>
                <p><strong>Data de Resolução:</strong> {{ $dados['data_termo'] }}</p>
            </section>
        </div>

        <section class="section_section">
            <h3>Âmbito da Cobertura</h3>
            <p>O Seguro de Vida associado ao Crédito protege-o a si e à sua família em caso de morte, invalidez ou
                dependência, assegurando o pagamento ao Banco do capital em dívida do Crédito ao consumo e o eventual
                remanescente para os seus herdeiros.</p>

            <h3>Âmbito Territorial</h3>
            <p>As garantias do presente contrato são válidas apenas em caso de sinistro ocorrido dentro dos limites
                geográficos expressamente referidos nas Condições;</p>

            <h3>Riscos Cobertos</h3>
            <p>>
                @foreach ($dados['coverages'] as $coverage)
                    {{ $coverage['name'] }} , 
                @endforeach
            </p>

            <!-- Morte e/ou Invalidez Total e Permanente -->

            <h3>Condições de Aceitação</h3>
            <ul>
                <li>Indicação da atividade profissional do proponente;</li>
                <li>Declaração de saúde na proposta (pela pessoa segura), Preenchimento de Questionário Clínico
                    detalhado (pela pessoa segura).</li>
                <li>Segurador reserva-se no direito de solicitar exames complementares ou informação
                    econômico-financeira, não incluídos na grelha de seleção, sempre que os mesmos sejam considerados
                    necessários para melhor apreciação do risco proposto.</li>
            </ul>

            <p style="margin-top: 40px;"><strong>Capital Seguro | Montante do Crédito:</strong>{{ $dados['coverage_value'] }} AOA</p>
            <p style="margin-bottom: 80px;"><strong>Prazo de Maturidade do Crédito:</strong> {{ $dados['coverage_duration'] }} Meses</p>
        </section>

        <div class="right2">
            Processado por programa validado n°. XXXXXXX
        </div>

        <hr>
        <footer class="footer">
            <div class="footer-footer">
                <div class="left">
                    <strong>NIF:</strong> 5417588962<br>
                    <strong>Sede:</strong> Ingombotas – Rua da Missão n°791, Luanda<br>
                    <strong>Email:</strong> geral@giantseguros.co.ao<br>
                    <strong>Telefone:</strong> 929 280 828 | 929 280 602<br>
                    <strong>Site:</strong> www.giantseguros.co.ao
                </div>
                <div class="right">
                    <img src="qr_code.png" alt="QR Code">
                </div>
            </div>
        </footer>
    </div>
    <div class="page2">
        <header>
            <div>
                <img src="img/logo giant seguros.png" alt="d" />
            </div>
            <div class="simulation-info2">
                <div>
                    <div>SIMULAÇÃO VIDA CRÉDITO CONSUMO</div>
                </div>
            </div>
        </header>

        <section class="section_section2">
            <h4>Principais Exclusões</h4>
            <p>O seguro não garante a cobertura do risco de morte ou de invalidez da pessoa segura quando estas derivem
                directa ou indirectamente de:</p>

            <ul>
                <li>Actos ou omissões dolosos ou praticados com negligência grave pela Pessoa Segura, Tomador do Seguro
                    ou Beneficiário, bem como por
                    aqueles pelos quais sejam civilmente responsáveis;</li>

                <li>Actos de terrorismo, como tal considerados pela legislação penal Angolana;</li>

                <li>Participação activa da Pessoa Segura em assaltos, greves, tumultos, sabotagem, rebelião, revolução e
                    guerra.</li>

                <li>Participação como condutor ou passageiro em provas desportivas e respectivos treinos, que envolvam a
                    utilização de qualquer veículo
                    motorizado ou não;</li>

                <li>Actos ou omissões da Pessoa Segura quando esta apresente evidência de consumo de álcool, drogas,
                    estupefacientes, psicotrópicos ou
                    medicamentos sem prescrição médica. Considera-se que a Pessoa Segura consumiu drogas ou
                    estupefacientes sempre que se determine,
                    mediante análise, a presença de substâncias ou restos metabólicos das mesmas, e seja estabelecida
                    pela perícia médica uma relação
                    directa com o sinistro. Considera-se que a Pessoa Segura consumiu álcool sempre que a taxa de álcool
                    no sangue seja superior ao
                    estabelecido pela lei em vigor quando se trate de acidentes de circulação e 0,5 mg quando se trate
                    de outro tipo de acidente;.</li>

                <li>Prática de alpinismo em altura superior a 4000 m, escalada, montanhismo e espeleologia, artes
                    marciais, boxe, karaté, luta e judo,
                    desportos aéreos, incluindo balonismo, asa delta, paraquedismo, parapente, queda livre, skydiving,
                    skysurfing, base jumping e saltos ou
                    saltos invertidos com mecanismo de suspensão corporal (bungee jumping), esqui em pistas não
                    sinalizadas, motonáutica, descida em
                    rappel ou slide, descida de correntes originadas por desníveis nos cursos de água (rafting,
                    canyoning, canoagem), parkour, caça grossa,
                    caça submarina, imersões submarinas com auxiliares de respiração, tauromaquia, pilotagem de
                    aeronaves, utilização, como passageiro,
                    de aeronaves que não sejam as de carreiras comerciais devidamente autorizadas</li>

                <li>Explosão ou quaisquer outros fenómenos, directa ou indirectamente, relacionados com a desintegração
                    ou fusão de núcleos de átomos,
                    bem como os efeitos da contaminação radioactiva;</li>

                <li>Acidentes, doenças, lesões, deformidades ou sequelas pré-existentes, diagnosticadas antes da entrada
                    em vigor do contrato, ainda que
                    as consequências das mesmas persistam, se manifestem ou determinem durante a vigência do mesmo.</li>

            </ul> <br>

            <p>Salvo convenção em contrário expressa nas Condições Particulares ou Condições Especiais, o presente
                contrato também não garante os danos,
                perdas ou despesas causadas ou resultantes de:
            </p> <br>

            <ul>
                <li>Suicídio ocorrido até 2 anos após o início do contrato ou da sua reposição em vigor ou do aumento de
                    capital, caso este aumento não
                    seja previamente previsto nas Condições Particulares;</li>

                <li>Se o suicídio ocorrer após o prazo de 2 anos desde o início do contrato mas durante os 2 anos
                    seguintes à reposição em vigor ou ao
                    referido aumento de capital, o seguro apenas não garante acréscimo da cobertura relacionado com a
                    referida circunstância, salvo
                    convenção em contrário constante das Condições Particulares</li>
            </ul> <br>

        </section>

        <div class="section_container">

            <section class="section holder2">
                <p><strong>Local de Risco:</strong> Angola</p>
            </section>

            <section class="section simulation2">
                <p><strong>Prêmio da Apólice:</strong> {{$dados['preco_apagar']}} AOA</p>
            </section>
        </div>

        <div class="right2">
            Processado por programa validado n°. XXXXXXXXX
        </div>
        <footer class="footer">
            <div class="footer-footer">
                <div class="left">
                    <strong>NIF:</strong> 5417588962<br>
                    <strong>Sede:</strong> Ingombotas – Rua da Missão n°791, Luanda<br>
                    <strong>Email:</strong> geral@giantseguros.co.ao<br>
                    <strong>Telefone:</strong> 929 280 828 | 929 280 602<br>
                    <strong>Site:</strong> www.giantseguros.co.ao
                </div>
                <div class="right">
                    <img src="qr_code.png" alt="QR Code">
                </div>
            </div>
        </footer>
    </div>
</body>

</html>