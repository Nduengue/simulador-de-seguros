<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposta de Seguro de Responsabilidade Civil</title>
    <style>
        @page {
            size: A4;
            margin: 0;

            @bottom-right {
                content: "Página " counter(page) " de " counter(pages);
                font-size: 10px;
                color: #000;
            }
        }

        body {
            font-family: "Times New Roman", Times, serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        .container {
            position: relative;
            width: 100%;
            height: auto;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            padding-bottom: 158px;
            /* Espaço para o rodapé */
            box-sizing: border-box;
            top: 85px;
        }

        .cabecario {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* Ocupa toda a altura da página */
            background-image: url('img/bg4.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: -1;
            /* Coloca atrás do conteúdo da página */
        }

        .cabecario .textos {
            margin-left: 40px;
            width: 400px;
            display: flex;
            height: 90px;
            background: red;
            flex-direction: column;
            align-items: center;
            padding: 30px;
        }

        .cabecario .textos span {
            color: #fff;
            font-size: 15px;
            font-weight: bold;
        }

        header {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            position: fixed;
            top: 0;
            background: white;
            z-index: 1000;
        }

        header img {
            width: 400px;
        }

        footer {
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 10px;
            box-sizing: border-box;
            z-index: 1000;
        }

        footer .ff {
            position: absolute;
            display: flex;
            align-self: center;
            justify-self: center;
            width: 70%;
            left: 100px;
            padding: 2px;
            background-color: #89cce4;
            border-radius: 0 40px 40px 40px;

        }

        footer .numero {
            position: relative;
            left: 700px;
            top: 20px;
            width: 40px;
            color: #89cce4;
            font-size: 15px;
        }

        .page-break {
            page-break-before: always;
        }

        .section {
            padding: 0 30px;
            margin-top: 80px;
            /* Espaço para o cabeçalho */
        }

        .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            margin-top: 20px;
            border-bottom: 2px solid #0b6ba6;
            border-top: 2px solid #0b6ba6;
            padding-bottom: 10px;
            padding-left: 10px;
            background-image: url('img/gg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        .section-content {
            font-size: 16px;
            margin-bottom: 10px;
        }

        /* Esconde o cabeçalho grande nas páginas seguintes */
        .no-first-page .cabecario {
            display: none;
        }

        /* Ajusta o espaço no início das páginas para o cabeçalho fixo */
        .no-first-page .section {
            margin-top: 0;
            /* Remove o espaço superior para a primeira página */
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
            font-weight: bold;
            list-style: none;
        }

        span {
            color: blue;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <?php $paginacao = 1;?>
        <div class="cabecario">
    </div>

    <div class="page-break"></div>

    <header>
        <img src="img/ff.png" alt="">
    </header>

    <footer>
        <div class="ff">
            <p>© 2024 Nome da Empresa - Todos os direitos reservado</p>
        </div>
    </footer>

    <div class="container">
        <!-- Primeira Página -->
        <!-- Corpo do PDF -->
        <div class="no-first-page">

            <div class="page">
                <div class="section">
                    <div class="section-title">NOME DO TOMADOR</div>
                    <div class="section-content">
                        <ul class="ul">
                            <li class="li"> {{-- $dados['nome'] --}} </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="page">
                <div class="section">
                    <div class="section-title">Beneficiarios</div>
                    <div class="section-content">
                        <ul class="ul">                          
                                <li class="li">{{-- $dados['beneficiario'] --}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="page">
                <div class="section">
                    <div class="section-title">Coberturas</div>
                    <div class="section-content">
                        <ul class="ul">
                            <li class="li">{{-- $dados['cobertura'] --}}</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="page">
                <div class="section">
                    <div class="section-title">Agravamentos</div>
                    <div class="section-content">
                        <ul class="ul">
                                <li class="li">{{-- $dados['agravamento'] --}}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="page">
                <div class="section">
                    <div class="section-title">Preço e Ano de Duração da Simulação</div>
                    <div class="section-content">
                        <ul class="ul">
                            <li class="li"><span> Valor da Cobertura: </span> {{-- $dados['valor'] --}} </li>
                            <li class="li"><span>Duração em Anos: </span> {{-- $dados['duracao'] --}}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


            <div class="page">
                <div class="section">
                    <div class="section-title">Preço e Ano de Duração da Simulação</div>
                    <div class="section-content">
                        <ul class="ul">
                            <li class="li"><span> Valor da Cobertura: </span> {{-- $dados['valor'] --}} </li>
                            <li class="li"><span>Duração em Anos: </span> {{-- $dados['duracao'] --}}
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </div>
            <div class="page">

                <div class="section">
                    <div class="section-title">Total: </div>
                    <div class="section-content">
                        <ul class="ul">
                            <li class="li"></li> 

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    </div>
</body>

</html>