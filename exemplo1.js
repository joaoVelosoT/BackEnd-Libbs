// var strNome = "Renata" ;
// var srtFrase = "Estou estudando node.js........";

// if (srtFrase.length > 3) {
//     var strVar = "Variavel Val";
//     let strLet = "Variavel Let";
//     console.log(strVar,strLet);
// }

// console.log(strVar);
// // console.log(strLet);
// const strConstante = "Somente eu";
// console.log(strConstante);

// let intValor1 = 10;
// let intValor2 = 4;

// let intCalculo = intValor1 * intValor2 ;

// let arrValores = [0,5,10,15];
// let arrItens = ["Rua", "Alameda", "Avenida"];

// arrItens.push("Praça");
// arrItens.push("Lote");

// console.log(intCalculo, intValor1, intValor2,strConstante, arrItens);

// console.log(srtFrase + " " + strNome);

// console.log(arrItens);
// console.log(arrItens,arrValores);

// arrItens.shift();
// console.log(arrItens);

// arrItens.pop();
// console.log(arrItens);

// let index = arrItens.indexOf("Avenida");
// console.log(index);

// if (index > -1) {
//     arrItens.splice(index, 1);
// }

// console.log(arrItens);

// for (let i=0; arrItens.length>i; i++){
//     console.log(i);
//     console.log(arrItens[i]);
// }

// let w = 0;
// while (w < arrItens.length) {
//     console.log("Valor do index: %d e valor dos Valores: %d",w,arrValores[w]);
//     w++;
// }

// arrItens.map(
//     (element, index) => (
//         console.log(`Valor do index: ${index} e valor do Item: ${element}`)
//     )
// )

// newItens = arrItens.reduce((todosItens, i) => todosItens + i)
// console.log(`valor do item: ${newItens}`);

// newValor = arrValores.reduce((valorAcumulado, n) => (valorAcumulado + n) * 3)
// console.log(`valor do item: ${newValor}`);
    

for (let i = 0; i < 16; i++) {
    console.log("Taboada do " + i)
    for(let p = 0; p < 16; p++){
        let calc = p * i;
        console.log(p + " * "  + i + " = " + calc);
    }
}

