// Função de busca binária: procura um elemento 'alvo' dentro de um array ordenado
// Se o elemento for encontrado, retorna seu índice; caso contrário, retorna -1
function binarySearch(array, alvo) {
    let esquerda = 0; // Índice inicial do array (posição mais à esquerda)
    let direita = array.length - 1; // Índice final do array (posição mais à direita)

    // Enquanto o índice esquerdo não ultrapassar o índice direito
    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2); // Calcula o índice do meio

        // Se o valor no meio for exatamente o alvo, encontramos o elemento e retornamos o índice
        if (array[meio] === alvo) {
            return meio; 
        } 

        // Se o valor no meio for menor que o alvo, descartamos a metade esquerda do array
        // e movemos o índice esquerdo para meio + 1, reduzindo assim a área de busca
        else if (array[meio] < alvo) {
            esquerda = meio + 1;  
        } 
        
        // Se o valor no meio for maior que o alvo, descartamos a metade direita do array
        // e movemos o índice direito para meio - 1, reduzindo a área de busca
        else {
            direita = meio - 1;
        }
    }

    return -1; // Se o loop terminar sem encontrar o alvo, retornamos -1 (valor não encontrado)
}

// Array ordenado para teste
let numeros = [1, 3, 5, 7, 8, 11, 13, 15, 17, 20];

// Chamando a função e exibindo o resultado
console.log(binarySearch(numeros, 20)); // Deve retornar 9, pois 20 está na posição 9 do array