<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulação de Seguro</title>
    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 15mm;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 120px;
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
            margin-bottom: 20px;
            font-size: 13px;
            
        }

        h3 {
            font-size: 18px;
            background-color: #bdbdbd;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
            padding: 5px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        footer {
            text-align: left;
            font-size: 10px;
            color: #555;
            margin-top: 2px;
            padding: 5px;
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
            <h3>PESSOA SEGURA</h3>
            <p><strong>Nome:</strong></p>
            <p><strong>Data Nascimento:</strong></p>
            <p><strong>Idade na Data Início do Seguro:</strong></p>
        </section>

        <section class="policy-info">
            <h3>DADOS DA APÓLICE</h3>
            <p><strong>Data Início:</strong> <strong>Hora Início:</strong></p>
            <p><strong>Data Termo:</strong></p>
            <p><strong>Prazo:</strong></p>
            <p><strong>Fracionamento:</strong></p>
            <p><strong>Cobrador:</strong></p>
        </section>

        <section class="guarantees">
            <h3>GARANTIAS E CAPITAIS</h3>
            <table>
                <tr>
                    <th>Garantias Contratadas</th>
                    <th>Capital</th>
                </tr>
                <tr>
                    <td>COBERTURA EM CASO DE MORTE</td>
                    <td>25 000 000,00 AOA</td>
                </tr>
                <tr>
                    <td>INVALIDEZ TOTAL E PERMANENTE</td>
                    <td>25 000 000,00 AOA</td>
                </tr>
            </table>
        </section>

        <section class="premium">
            <h3>PRÊMIO</h3>
            <p><strong>Prêmio Total Único:</strong> 387 564,84 AOA</p>
        </section>

        <section class="important-info">
            <h3>INFORMAÇÃO IMPORTANTE</h3>
            <p>
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

        <footer>
            <p><strong>Fidelidade - Companhia de Seguros, S.A.</strong> • Sede: Via S8, Condomínio Cidade Financeira, Bloco 10 - 3º Piso
                - Talatona - Luanda - Angola</p>
            <p>NIF: 5417081509 • Capital Social: 3.052.350.000,00 AOA • www.fidelidade.co.ao</p>
        </footer>
    </div>
</body>

</html>
