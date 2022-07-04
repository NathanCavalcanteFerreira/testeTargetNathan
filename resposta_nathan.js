// 1) retorno soma com loop while

var indice = 13;
var k = 0;
var soma = 0;

while(k < indice){
	k = k + 1;
	soma = soma + k;
}
console.log(soma);

/*
2) Dado a sequência de Fibonacci, onde se inicia por 
0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o 
número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua 
preferência ou pode ser previamente definido no código;

*/

const numero = parseInt(prompt('Digite o numero: '));
let n1 = 0, n2 = 1, proxTerm;

console.log('Fibonacci:');
console.log(n1); 
console.log(n2); 

proxTerm = n1 + n2;

while (proxTerm <= numero) {

    // print the next term
    console.log(proxTerm);

    n1 = n2;
    n2 = proxTerm;
    proxTerm = n1 + n2;
}

/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal


Nao entendi onde estava o arquivo Json para utilizar os valores 
*/





// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// VALORES DISTRIBUIDORAS


const faturamento =  {
    SP: '67.836,43',
    RJ: '36.678,66', 
    MG: '29.229,88',
    ES: '27.165,48',
    Outros: '19.849,53',
    total: '180.759,98'
}

var percentualSP = (parseFloat(faturamento.SP)/parseFloat(faturamento.total))*100;
console.log(`o percentural de São Paulo é: ${percentualSP.toFixed(0)}%`);

var percentualRJ = (parseFloat(faturamento.RJ)/parseFloat(faturamento.total))*100;
console.log(`o percentural do Rio de Janeiro é: ${percentualRJ.toFixed(0)}%`);

var percentualMG = (parseFloat(faturamento.MG)/parseFloat(faturamento.total))*100;
console.log(`o percentural de Minas Gerais é: ${percentualMG.toFixed(0)}%`);

var percentualES = (parseFloat(faturamento.ES)/parseFloat(faturamento.total))*100;
console.log(`o percentural de Espirito Santo é: ${percentualES.toFixed(0)}%`);

var percentualOutros = (parseFloat(faturamento.Outros)/parseFloat(faturamento.total))*100;
console.log(`o percentural dos Outros é: ${percentualOutros.toFixed(0)}%`);



// 5) Escreva um programa que inverta os caracteres de um string.


const aprovado = "Nathanzada aprovado e contratado pela target sistemas"


function invertendoAprovado(string){
    let invertendo = "";

    for(let i = string.length - 1; i >= 0; i--){
        invertendo += string[i];
    }
    return invertendo;
}

console.log(invertendoAprovado(aprovado));