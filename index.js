/*
	Definir Variável do tipo string, 
	utilizar o comando var para definir como uma variável,
	apesar de ser o modo padrão do javascript para definição 
    de variável, atualmente, este módulo caiu em deuso,
    pelo fato de que este tipo de variável
	ser	elevada(hoisting) ao topo de execução do processo, 
    antes mesmo da execução do código,
	permitindo comportamentos que surpreender alguns programadores.
*/
var strNome = "Renata";

/*
	Definir Variável do tipo string,
	utilizan o comando let para declaração de 
    variáveis com escopo de bloco,
	ou seja, a variável só poderá ser 
    executada na estrutura do contexto ao qual pertence
*/

let strFrase = "Estou estudando node.js .... :-))";


// Verificar diferença ente var e let

if (strFrase.length > 3){
	var strVar = "Variável Val";
	let strLet = "Variável Let";
	
	// Imprime no terminal as variável definidas
	console.log(strVar,strLet);
}

console.log(strVar);
/*
	Deve dar erro ao executar esta linha,
	porque a strLet foi declarada dentro do bloco do if 
	e não na estrutura do principal do arquivo
*/

//console.log(strVar,strLet);
 

/*
	Definir Variável do tipo string,
	utilizam o comando const para declaração de 
    variáveis com escopo de constante,
	ou seja, a variável não poder sofre alteração 
    de valor após declarada
*/

const strConstante = "Somente eu";
console.log(strConstante);


strConstante = "Mudei?" // teste
/*
	Dever dar erro ao executar esta linha,
	porque a strConstante não pode ser alterada.
	
*/

//strConstante = "Novo texto";

//Definir Variável do tipo númerico inteiro
let intValor1 = 10
let intValor2 = 4;

//Definir Variável do tipo operação matemática
let intCalculo = intValor1 * intValor2;

//Definir array com números
let arrValores = [0,5,10,15,20,25,30,35,40];

//Definir array com texto
let arrItens = ["Rua","Alameda","Avenida","Quadra","Zona"];

//Inserir dados em variável array
arrItens.push("Praça");
arrItens.push("Lote");

//Imprimir variáveis no console do terminal
console.log("Imprimir o variáveis");
console.log(strNome);
console.log(strFrase);
console.log(strVar);
console.log(strConstante);
console.log(intValor1);
console.log(intValor2);
console.log(intCalculo);

//Imprimir variáveis concatenadas no console do terminal
console.log(strFrase + " "  + strNome);
console.log(strFrase.concat(" ",strNome))

console.log("Imprimir o operação matemática");
console.log(intValor1 + intValor2);
console.log(intValor1 - intValor2);
console.log(intValor1 * intValor2);
console.log(intValor1 / intValor2);

console.log("Imprimir o variável Array");
console.log(arrItens);
console.log(arrItens,arrValores)

// Excluir primeiro item na variável array
arrItens.shift();
console.log(arrItens);

// Excluir último item na variável array
arrItens.pop();
console.log(arrItens);

// Retorna o valor do index do variável array definido 
// pelo item
let index = arrItens.indexOf("Avenida");
console.log(index);

if (index > -1) {
// Excluir um item específico na variável array
    arrItens.splice(index, 1);
}
console.log(arrItens);

/* 
    Utilizar o comando de repetição for para fazer a 
    leitura da variável do tipo array
	
*/
for(let i=0; arrItens.length>i; i++){
    console.log(i);
    console.log(arrItens[i]);
}

/* 
    Utilizar o comando de repetição while para fazer a 
    leitura da variável do tipo array
	
*/

let w = 0;
while (w < arrItens.length) {
	console.log("Valor do Index: %d e valor do Valores: %d",w,arrValores[w]);
	w++;
}

/*
    Trabalhando com algumas funções de Array
	
	* variável.map -	Uso da função map, existe na variável do tipo array, 
    para mapear o array de forma direta. 
*/

arrItens.map( 
    (element, index) => (
         console.log(`Valor do Index: ${index} e valor do Item: ${element}`)
         ));

arrValores.map(
    (element, index) => ( 
        console.log(`Valor do Index: ${index} e valor do Valores: ${element}`)
        ));

// * variável.filter - filtra os elementos do array e mostra somente os elementos que 
// satisfaçam a condição
let newItens =arrItens.filter(n => n != "Lote") 
console.log(`valor do Item: ${newItens}`);
let newValor = arrValores.filter(n => n > 5);
console.log(`valor do Item: ${newValor}`);


// * variável.reduce - faz a leitura de todos os elementos do array e 
// mostra o valor acumulado

newItens =arrItens.reduce((todosItens, i) => todosItens + i) 
console.log(`valor do Item: ${newItens}`);

newValor = arrValores.reduce((valorAcumulado, n) => valorAcumulado + n) 
console.log(`valor do Item: ${newValor}`);

newValor = arrValores.reduce((valorAcumulado, n) => (valorAcumulado + n) * 3) 
console.log(`valor do Item: ${newValor}`);







