const reqEntrada = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

reqEntrada.question(`Qual e o seu nome? `, strNome => {

    console.log("Oi, %s!",strNome.toUpperCase());

reqEntrada.question(`Qual e a sua idade? `, (idade) => {
    const intIdade = parseInt(idade);
    if (isNaN(intIdade)) {
        console.log('Por favor, Insira um numero valido.');
    } else {

        let intAnoAtual = new Date().getFullYear();
        let intAnoNascimento = intAnoAtual - intIdade ;
        console.log(`Voce nasceu em ${intAnoNascimento},`); 
       }
       reqEntrada.close();

})

});

