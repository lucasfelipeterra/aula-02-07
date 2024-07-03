let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
let media = 0;
let maiorNota = notas[0];
let menorNota = notas[0];
let notasAcimaMedia = 0;
let notasAbaixoMedia = 0;

function total(array) {
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma;
}
module.exports = total;

function Media(array) {
    for (let i = 0; i < array.length; i++) {
        media += array[i];
    }
    media = media / array.length;
    return media;
}
module.exports = Media;

function Maior(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNota) {
            maiorNota = array[i];
        }
    }
    return maiorNota;
}
module.exports = Maior;

function Menor(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNota) {
            menorNota = array[i];
        }
    }
    return menorNota;
}
module.exports = Menor;

function Acima(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 6) {
            notasAcimaMedia++;
        }
    }
    return notasAcimaMedia;
}
module.exports = Acima;

function Abaixo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 6) {
            notasAbaixoMedia++;
        }
    }
    return notasAbaixoMedia;
}
module.exports = Abaixo;

function adicionar(array) {
    notas.push(8.0);
}
module.exports = adicionar;

function imprimir(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
module.exports = imprimir;

adicionar(notas);
console.log(total(notas));
console.log('a média das notas é : ' + Media(notas));
console.log(Maior(notas));
console.log(Menor(notas));
console.log(`temos ${Acima(notas)} notas acima da média`);
console.log(`temos ${Abaixo(notas)} notas abaixo da média`);
console.log(`aqui está a lista de notas:`);
imprimir(notas);