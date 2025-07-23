// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
// Use métodos de array para calcular:
// A soma de todos os elementos.
// A média dos elementos.
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.
// Imprima no console:
// O array original 'numeros'
// A soma
// A média
// O array pare

let listaDeNumeros = [2, 3, 5, 6, 7, 8, 9, 10, 11, 12];
let soma = listaDeNumeros.reduce((acumulador, valor) => acumulador + valor, 0);
let listaPar = listaDeNumeros.filter(num => num % 2 === 0);

//ou

/* for(let i = 0; i < listaDeNumeros.length; i++){
    soma = soma + listaDeNumeros[i];
    if(listaDeNumeros[i] % 2 == 0){
        listaPar.push(listaDeNumeros[i]);
    }
} */

let media = soma / listaDeNumeros.length;
console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Lista de números pares: " + listaPar);