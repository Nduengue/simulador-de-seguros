<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Defina a largura da página para o formato A4 */
       body{
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.8);
        }
       
        .container {
            margin: auto;
            padding:10mm;
            width: 199mm;
            height: 279mm;
            background-color: #fff;
            position: relative;
        }

        footer {
            width: 199mm;
            bottom: 10mm;
            position: absolute;
            background-color: #ddd;
            padding-top: 5mm;
            padding-bottom: 5mm;
        }

        header{
            width: 100%;            
        }
        header .logo {
            text-align: left;
            float: left;
            padding: 10px;
        }

        header .logo img {
            width: 150px;
            height: 60px;
            object-fit: contain;
        }

        header .titulo {
            text-align: right;
            float: right;
            padding-top: 25px;
        }

        header .titulo .simulater {
            font-weight: bold;
            font-size: 1em;
        }

        header .titulo .vida {
            font-size: .8em;
        }

        main {
            clear: both;
            margin-top: 20px;
        }

        main h4 {
            text-align: left;
            font-size: 1em;
            margin-bottom: 10px;
        }

        main .dados_tomador div,
        main .dados_tomador p {
            font-size: 0.9em;
            font-weight: bold;
        }

        main .table {
            width: 100%;
            margin-top: 15px;
            border-collapse: collapse;
        }

        .table th,
        .table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size: 0.9em;
        }

    </style>
</head>

<body>
    <div class="container">
        <header>
            <div class="logo">
                <img src="img/download (1)-Photoroom.png" alt="Logo">
            </div>
            <div class="titulo">
                <div class="simulater">Simulação</div>
                <div class="vida">VIDA CRÉDITO INDIVIDUAL</div>
                <!-- <div class="">Simulação</div>
                <div class="">VIDA CRÉDITO INDIVIDUAL</div> -->
            </div>
        </header>

        <main>
            <div class="dados_tomador">
                <div><h4>Dados do Tomador de Seguros</h4></div>
                <div><strong>Nome:</strong> Exemplo Nome</div>
                <div><strong>Cliente nº:</strong> 123456</div>
                <div><strong>NIF:</strong> 7890123</div>
                <div><strong>Doc Id:</strong> ID12345</div>
                <div><strong>Tel:</strong> +244 900000000</div>
                <div><strong>Email:</strong> exemplo@dominio.com</div>
            </div>

            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Dados da Simulação</th>
                            <th>Simulação nº:</th>
                            <th>Efetuado(a) Por</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vida Crédito Individual</td>
                            <td>759869</td>
                            <td>Jelson Freitas</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Cobertura</th>
                            <th>Agravamento</th>
                            <th>Capital Seguro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Morte</td>
                            <td>Incluso</td>
                            <td>25.000.000,00 AKZ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>

        <footer>
            <div>CALL CENTER: +244 900000000 | WWW.GLOBALSEGUROS.COM</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum recusandae.</div>
        </footer>
    </div>
</body>

</html>



<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html {
            font-family: Arial, sans-serif;
            width: 210mm;
            height: auto;
            padding: 20mm;
            background-color: rgba(0, 0, 0, 0.7777);
            margin: auto;
        }

        body {
            display: flex;
            height: auto;
            width: 100%;
            height: 297mm;
            padding: 20mm;
            background-color: #fff;

        }

        .container {
            width: 100%;
            height: auto;
            background-color: white;
            position: relative;
        }

        header {
            width: 100%;
            display: flex;
            height: auto;
            flex-direction: row;
            margin-bottom: 1px;
        }

        header .logo {
            width: 50%;
            display: flex;
            height: auto;
            align-items: center;
            margin-bottom: 1px;
            padding: 5px;
        }

        header .logo img {
            width: 150px;
            height: 60px;
            object-fit: fill;
        }

        header .titulo {
            width: 50%;
            display: flex;
            margin-bottom: 1px;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: center;
            padding-right: 10px;
        }

        header .titulo .simulater {
            font-weight: bold;
        }

        header .titulo .vida {
            font-size: 0.9em;
        }

        main {
            top: 40px;
            padding-top: 35px;
            padding: 5px;
            display: flex;
            flex-direction: column;
        }

        main .dados_tomador {
            /* display: flex;
            flex-direction: column; */
        }

        main .dados_tomador div {
            font-size: 0.9em;
        }

        main .dados_tomador div {
            font-weight: bold;
        }

        main .dados_tomador p > font {
            font-weight: bold;
        }

        main .table {
            width: 100%;
            margin-bottom: 30px;
        }

        main .table table {
            border-collapse: collapse;
            width: 100%;
            background-color: white;
            border: 1px solid #ddd;
            box-sizing: border-box;
            /*  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);  */
        }

        th,
        td {
            padding: 12px;
            text-align: left;
        }

        th {
            color: #000;
        }

        th p,
        th span {
            font-size: 0.8em;
        }

        th span {
            font-weight: normal;
            top: -4px;
        }

        td p {
            font-size: 0.8em;
            font-weight: bold;
        }

        td span {
            font-weight: normal;
            font-size: 0.8em;
            top: -4px;
        }

        tr {
            border-bottom: 1px solid #ddd;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            padding: 10PX;
        }
        footer .texto-footer{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: end;
            padding: 5px;
        }
        footer .texto-footer span{
            font-size: .7em;
            text-align: justify;
        }
        footer .call-center{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: end;
            padding: 5px;
        }
        footer .call-center span{
            font-size: .7em;
        }
    </style>
</head>

<body>

    <div class="container">
        <header>
            <div class="logo">
                <img src="img/download (1)-Photoroom.png" alt="">
            </div>
            <div class="titulo">
                <div class="simulater">Simulação</div>
                <div class="vida">VIDA CRÉDITO INDIVIDUAL</div>
            </div>
        </header>

        <main>
            <div class="dados_tomador">
                <h4>Dados do Tomador de Seguros</h4>
                <div>
                    <font>Nome:</font>
                </div>
                <div>
                    <font>Cliente nº:</font>
                </d>
                <div>
                    <font>NIF:</font>
                </div>
                <div>
                    <font>Doc Id:</font>
                </div>
                <div>
                    <font>Tel:</font>
                </div>
                <div>
                    <font>Email:</font>
                </div>
                <p>
                    <font>Agente Produtor:</font> 1881
                </p>
            </div>

            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>

                                <p>Dados da Simulação</p>
                                <span></span>
                            </th>
                            <th></th>
                            <th>
                                <p>Efectuado(a) Por</p>
                                <span>Jelson Freitas</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>Ramo</p>
                                <span>Vida Credito Individual</span>
                            </td>
                            <td>
                                <p>Simulação nº:</p>
                                <span>759869</span>
                            </td>
                            <td>
                                <p>Data Simulação</p>
                                <span>30-10-2024</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Duração</p>
                                <span>Temporario</span>
                            </td>
                            <td>
                                <p>Data Fim</p>
                                <span>30-10-2024</span>
                            </td>
                            <td>
                                <p>Data Simulação</p>
                                <span>30-10-2029</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Prêmio Único</p>
                                <span>759.400.00 AKZ</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>Cobertura</p>
                            </th>
                            <th>
                                <p>Agravamento</p>
                            </th>
                            <th>
                                <p>Capital Seguro</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>Morte</p>
                            </td>
                            <td>
                                <p>Morte</p>
                            </td>
                            <td>
                                <p>25.000.000,00 AKZ</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Invalidez Absoluto e Definitiva(IAD)</p>
                            </td>
                            <td>
                                <p>Morte</p>
                            </td>
                            <td>
                                <p>25.000.000,00 AKZ</p>
                            </td>
                        </tr>
                        <tr>
                    </tbody>
                </table>
            </div>
        </main>

        <footer>
            <div class="texto-footer">
               <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem veritatis, vero laudantium
                ipsum earum ducimus sint hic, eaque expedita ab inventore totam mollitia perferendis dolores error
                perspiciatis eum recusandae.</span>
            </div>
            <div class="call-center">
                <SPan>CALL CENTER: +244 900000000</SPan>
                <SPan>WWWW.GLOBALSEGUROS.COM</SPan>
            </div>
        </footer>
    </div>

</body>

</html> -->


