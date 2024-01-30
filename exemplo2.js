function fctTexto(){
    let intV1 = 50;
    let intV2 = 40;
    let intv3 = intV1 + intV2;
    let strNome = "Marcos";
    console.log("Olá %s, o resultado da operação foi: %d", strNome, intV1);
}


function fctCalculo(a,b){
    let intDif = 0;
    let intResult = a+b;
    if (a > b){
        intDif = a-b;
    }else {
        intDif = b-a;
    }

    for(let i = 1; i <= intDif; i++){
        intResult *= i;
    }
    return intResult;
}

const fctFibonacci = (intValor) => {
    let intTermo = intValor;
    let intPenultimo = 0;
    let intUltimo = 1;
    let intNumero = 0;
    let intCount = 3;
    while(intCount <= intTermo){
        intNumero = intUltimo + intPenultimo;
        intPenultimo = intUltimo;
        intUltimo = intNumero;
        intCount++;
    }
    return intNumero;
}

console.log(fctFibonacci(22));

fctTexto();

