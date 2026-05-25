const prompt = require('prompt-sync')();

let lista = prompt('Digite números separados por espaço:').split(' ').map(Number);

console.log(lista.sort((a, b) => a - b)); 
console.log(lista.reduce((a, b) => a + b) / lista.length); 
console.log(lista.length); 
