const prompt = require('prompt-sync')({ sigint: true });

function fatorial(num) {
    if (isNaN(num) || num < 0) {
        console.log('Por favor, insira um número inteiro não negativo válido.');
    } else {
        let fat = 1;
        for (let i = 1; i <= num; i++) {
            fat *= i;
        }
        return fat;
    }
}
let numero = prompt('Insira o número que será calculado o fatorial? ');

fat = fatorial(numero);

console.log(`O fatorial de ${numero} é ${fat}.`);