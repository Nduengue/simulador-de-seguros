<!DOCTYPE html>
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
            background-color: #fff;
        }

        .container {
            height: auto;
            background-color: white;
            padding: 20px;
        }
        header {
            position: relative;
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
            background-color: red;
            width: 50%;
            display: flex;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: center;
            padding-right: 10px;
            margin-bottom: 40px;
        }

        header .titulo .simulater {
            font-weight: bold;
            text-align: right;
        }

        header .titulo .vida {
            font-size: 0.9em;
            text-align: right;
        }
        footer {
            width: 21mm;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
           
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

        
        <footer>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem veritatis, vero laudantium
                ipsum earum ducimus sint hic, eaque expedita ab inventore totam mollitia perferendis dolores error
                perspiciatis eum recusandae.

                CALL CENTER: +244 900000000
                WWWW.GLOBALSEGUROS.COM
 
        </footer>
    </div>

</body>

</html>