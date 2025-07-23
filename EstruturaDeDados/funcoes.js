/* function ehPar(numero){
    if(numero%2==0){
        console.log("O número " + numero + " é par");
    }else{
        console.log("O número " + numero + " é impar");
    } // podemos utilizar o return com uma variavel que traga o resultado
}
let numero = 4;
ehPar(numero);

function ordenarArrayNumerosCrescente(listaDeNumeros){
    listaDeNumeros = listaDeNumeros.sort((a, b) => a - b);  // sort ordena string/numeros, podemos usar dentro do sort meios de comparação
    console.table(listaDeNumeros); 
}

let numeros = [5, 3, 8, 1, 9];
ordenarArrayNumerosCrescente(numeros); */

//funçoes anonimas // callback
 
let teste = function(){
    console.log("Sport");
}
teste(); 
// exemplo uso 
// function showFunction(sucesso, erro) {
//     if(true) {
//         sucesso('Sucesso na requisição')
//     } else {
//         erro('erro na requisição')
//     }
// }

// let successCallback = (message) => {console.log(message)}

// let errorCallback = function(message) {
//     console.log(message)
// }

// showFunction(successCallback, errorCallback)

// outro exemplo 

/* let ParOuImpar = function(valor) {
    let resultado
    if(valor % 2 === 0) {
        resultado = 'PAR'
    } else {
        resultado = 'ÍMPAR'
    }
    return resultado
}

function VerificaArrayPares(arr, callback) {
    let pares = []

    for(let i = 0; i < arr.length; i++) {
        let resultado = callback(arr[i])
        if(resultado == 'PAR'){
            pares.push(arr[i])
        }
    }
    return pares
}
console.log(VerificaArrayPares([1, 2, 3, 4, 8], ParOuImpar)) */

//ordenar lista de numeros
function somarElementosArray(listaDeNumeros){
    let soma = listaDeNumeros.reduce((acumulador, valor) => acumulador + valor, 0); // Pdemos utilizar um for
    // Ele percorre os elementos do array um por um.
    // Em cada etapa, a função que você define recebe um acumulador e o valor atual do array.
    // O resultado de cada chamada é armazenado no acumulador e passado para a próxima iteração.
    // No final, retorna um único valor representando a combinação de todos os elementos.
    return soma;
}

// retornar maior numero array

function maiorNumeroArray(array) {
    let maior = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

let listaNumeros = [5, 3, 8, 1, 9];
//console.log(somarElementosArray(listaNumeros));
console.log(maiorNumeroArray(listaNumeros));