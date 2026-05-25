let lista = (7 ,8 , 9, 2, 20, 530, 422, 213)
let lista2 = (1, 2, 3, 4, 5, 6, 7)
let total = lista.length;
console.log(lista.sort((x,y) => x - y))

//formas de descobrir a media dos numeros///


function calcularMedia(numeros) {
    let soma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    return soma / numeros.length;

}

console.log("O numero total de numeros na lista é:", total)

let media = calcularMedia(lista); 

let maioresQueAMedia = lista.filter(n => n > media);

console.log("A média é:", media); 
console.log("Números maiores que a média:", maioresQueAMedia); 

 

// const prompt = require('prompt-sync')();

// let lista = prompt('Digite números separados por espaço:').split(' ').map(Number);

// console.log(lista.sort((a, b) => a - b)); 
// console.log(lista.reduce((a, b) => a + b) / lista.length); 
// console.log(lista.length); 
