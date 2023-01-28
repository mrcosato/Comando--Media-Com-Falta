var readline = require('readline-sync');
//variaveis de entrada
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var nome = "";
var totalAula = 0;
var totalDeFaltas = 0;
//variáveis para armazenar os calculos;
var media = 0;
var percentualDeFaltas =0;

console.log('Programa que calcula media de um aluno');

console.log("Programa que calcula a media do aluno");
nome = readline.question("Qual o seu nome?");
n1=readline.question ('informe a nota 1');
n2 = parseFloat(readline.question('informe a nota 2'));
n3 = parseFloat(readline.question('informe a nota 3'));
n4 = parseFloat(readline.question('informe a nota 4'));
totaldeaula = parseInt(readline.question('informe as quantidades de aulas do curso'));
totaldefaltas = parseInt(readline.question('informe a quantidade de faltas: '));
media = (n1+n2+n3+n4) /4;

console.log(nome+"sua media é"+ media);
percentualDeFaltas = (totaldefaltas*100 )/ totaldeaula;
console.log(nome+"seu percentual de faltas e: "+ percentualDeFaltas);
if((media >= 6) && (percentualDeFaltas<=25)){
    console.log("Parabéns!! Você foi aprovado");
}
else  {
    console.log('Que pena nao foi aprovado');
}