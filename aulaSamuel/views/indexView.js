// Usando o module.exports, podemos exportar o arquivo para ser utilizado em outro local

module.exports = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
    />
    <title>Document</title>
</head>
<body>
    <header class="header">
    <img src="midia/CAD.COM (1).png" alt="" />
    <ul>
        <li>Vendas</li>
        <li>Compra</li>
        <li>Estoque</li>
        <li>Finaceiro</li>
        <li>Transporte</li>
    </ul>
    </header>
    <div>
    <h1>NOVO PRODUTO OU SERVIÇO</h1>

    <hr />

    <form>
        <div class="container">
        <div class="separar1">
            <label for="pnome">Nome do produto *</label>
            <input type="text" id="pnome" placeholder="Nome do produto" />

            <label for="pmarca">Marca do produto</label>
            <input type="text" id="pmarca" placeholder="Marca do produto" />
        </div>
        <div class="separar2">
            <label for="pnumero">Código de barras</label>
            <br>
            <input type="number" name="pnumero" id="pnumero" />
<br>
            <label for="pvalor">Valor do produto</label>
            <br>
            <input type="number" name="pvalor" id="pvalor" />
        </div>
        </div>

        <label for="pquantidade">Quantidade do produto *</label>
        <br />
        <input type="number" name="pquantidade" id="pquantidade" min="1" />

        <br><label for="tipo">Tipo</label>
        
        <select id="tipo" name="tipo">
        <option value="Produto">Produto</option>
        <option value="Serviço">Serviço</option>
        </select>

        <br><label for="pproduto">Descrição do produto</label>
        <br>
        <input type="text" id="pproduto" placeholder="" />
        <br />
        <input id="btn" type="Submit" value="Salvar" />
        <input id="btn" type="Submit" value="Cancelar" />
    </form>
    </div>
    <script src="script.js"></script>

</body>
</html>
    `
}