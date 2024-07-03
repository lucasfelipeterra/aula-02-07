const prompt = require('prompt-sync')({ sigint: true });
let Notas = [];
let med = 0;

function media(array) {
    for (let i = 0; i < array.length; i++) {
        med = med + array[i];
    }
    return med / array.length;
}

let tamanho = Number(prompt('quantas notas serão usadas para calcular a média?: '));

for (let i = 0; i < tamanho; i++) {
    Notas.push(Number(prompt('Insira uma nota: ')));
}

console.log(`a média das notas é ${media(Notas)}`);