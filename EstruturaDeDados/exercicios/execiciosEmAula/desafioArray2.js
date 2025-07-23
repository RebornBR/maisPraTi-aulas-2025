let listaDeNumeros = [5, 1, 4, 6, 8 , 9, 10, 2, 11, 12];
console.log("Antes de ordenar: " + listaDeNumeros); // sort sempre ordena menor para o maior(padrao unicode)
listaDeNumeros.sort((a, b) => a - b); // sort ordena string/numeros, podemos usar dentro do sort meios de comparação
console.log("Depois de ordenar: " + listaDeNumeros);
let soma = listaDeNumeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log("Soma: " + soma);
let media = soma / listaDeNumeros.length;
console.log("Media: " + media);