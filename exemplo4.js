const reqEntrada = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fctCalcDiametro(radius){
    return radius * radius ;
}

const fctCalcVolume = (radius) => {
    return 4 / 3 * Math.PI * radius
}

reqEntrada.question("Qual o valor do raio que deseja usar para calcular?", raio => {
    let msgErro = "É necessario definir o valor númerico para poder efetuar os calculos"
if (!raio) {
    console.log(msgErro);
}else {
    if(isNaN(raio)) {
        console.log(msgErro);
    }else {
        console.log
    }
}
})

