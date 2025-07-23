class Node {
    constructor(valor) {
        this.valor = valor; // Armazena o valor do nó
        this.proximo = null; // Ponteiro para o próximo nó, inicialmente null
        this.anterior = null; // Ponteiro para o nó anterior, inicialmente null
    }
}

// Definição da classe da lista duplamente encadeada
class listaDuplamenteEncadeada {
    constructor() {
        this.head = null; // Aponta para o primeiro elemento da lista
        this.UltimoDaListaTail = null; // Aponta para o último elemento da lista
        this.length = 0; // Contador do tamanho da lista
    }

    // Método para inserir um elemento no início da lista
    inserirInicio(valor) {
        let novo = new Node(valor); // Cria um novo nó com o valor passado

        if (!this.head) { // Se a lista estiver vazia
            this.head = this.UltimoDaListaTail = novo; // O novo nó se torna o primeiro e o último da lista
        } else {
            novo.proximo = this.head; // O novo nó aponta para o antigo primeiro nó da lista
            this.head.anterior = novo; // O antigo primeiro nó passa a apontar para o novo nó
            this.head = novo; // O novo nó se torna o novo primeiro nó da lista
        }
    }

    // Método para inserir um elemento no final da lista
    inserirFim(valor) {
        let novo = new Node(valor); // Cria um novo nó com o valor passado

        if (!this.head) { // Se a lista estiver vazia
            this.head = this.UltimoDaListaTail = novo; // O novo nó se torna o primeiro e o último da lista
        } else { // Se já houver elementos na lista
            this.UltimoDaListaTail.proximo = novo; // O antigo último nó aponta para o novo nó
            novo.anterior = this.UltimoDaListaTail; // O novo nó aponta para o antigo último nó
            this.UltimoDaListaTail = novo; // O novo nó se torna o novo último nó da lista
        }
        this.length++; // Incrementa o tamanho da lista
    }

inserirEmPosicao(indicePosicaoQueQueroInserir, valor) {
    // Verifica se o índice está fora dos limites da lista
    if (indicePosicaoQueQueroInserir < 0 || indicePosicaoQueQueroInserir > this.length) 
        throw new RangeError("Índice fora dos limites");
    // Se o índice for 0, insere no início da lista
    if (indicePosicaoQueQueroInserir === 0) return this.inserirInicio(valor);
    // Se o índice for igual ao tamanho da lista, insere no fim
    if (indicePosicaoQueQueroInserir === this.length) return this.inserirFim(valor);
    // Inicializa um ponteiro para percorrer a lista a partir do primeiro nó
    let atual = this.head;
    // Percorre a lista até encontrar a posição onde o novo elemento será inserido
    for (let i = 0; i < indicePosicaoQueQueroInserir; i++) {
        atual = atual.proximo;
    }
    // Cria um novo nó com o valor passado
    let novo = new Node(valor); 
    // Obtém o nó anterior ao que será inserido
    let noAnterior = atual.anterior;
    // Ajusta os ponteiros para conectar o novo nó na posição correta
    noAnterior.proximo = novo; // O nó anterior aponta para o novo nó
    novo.anterior = noAnterior; // O novo nó aponta para o nó anterior
    // **Faltam alguns ajustes:**
    // O novo nó também precisa apontar para o nó que estava na posição desejada
    novo.proximo = atual;
    atual.anterior = novo;
    this.length++
}

removerPosicao(indicePosicaoQueQueroRemover) {
    // Verifica se o índice é inválido (fora dos limites da lista)
    if (indicePosicaoQueQueroRemover < 0 || indicePosicaoQueQueroRemover >= this.length) throw new RangeError("Índice fora dos limites");
    let remover; // Variável para armazenar o nó que será removido
    // Caso especial: Se a lista contém apenas um elemento
    if (this.length === 1) {
        remover = this.head; // O único elemento é removido
        this.head = this.UltimoDaListaTail = null; // A lista fica vazia
    } 
    // Caso especial: Remover o primeiro elemento da lista
    else if (indicePosicaoQueQueroRemover === 0) {
        remover = this.head; // O nó a ser removido é o primeiro (cabeça)
        this.head = this.head.proximo; // Atualiza a cabeça para o próximo nó
        this.head.anterior = null; // Remove a referência ao nó anterior
    } 
    // Caso especial: Remover o último elemento da lista
    else if (indicePosicaoQueQueroRemover === this.length - 1) {
        remover = this.UltimoDaListaTail; // O nó a ser removido é a cauda
        this.UltimoDaListaTail = this.UltimoDaListaTail.anterior; // Atualiza a cauda para o nó anterior
        this.UltimoDaListaTail.proximo = null; // Remove a referência ao próximo nó
    } 
    // Caso geral: Remover um elemento do meio da lista
    else {
        let atual = this.head; // Começa na cabeça da lista
        // Percorre até encontrar o nó no índice desejado
        for (let i = 0; i < indicePosicaoQueQueroRemover; i++) {
            atual = atual.proximo;
        }
        remover = atual; // Define o nó que será removido

        // Ajusta os ponteiros para manter a integridade da lista
        let { anterior, proximo } = atual;
        anterior.proximo = proximo;
        proximo.anterior = anterior;
    }
    
    // Reduz o tamanho da lista
    this.length--;
}
   imprimirFrenteOrdemProximo() {
    let atual = this.head; // Inicializa uma variável para percorrer a lista, começando pelo primeiro nó
    let string = ""; // Inicializa uma string vazia para armazenar a representação da lista
    while (atual) { // Enquanto houver um nó na lista (ou seja, enquanto atual não for null)
        string += atual.valor + "->"; // Adiciona o valor do nó atual à string, seguido de "->"
        atual = atual.proximo; // Move para o próximo nó da lista
    }
    string += "null"; // Adiciona "null" ao final da string para indicar que a lista terminou
    console.log(string); // Exibe a string no console, mostrando a representação da lista
    }   

    imprimirTrasOrdemAnterior() {
    let atual = this.UltimoDaListaTail; // Começa na cauda da lista, pois queremos imprimir de trás para frente
    let string = ""; // Variável para armazenar a representação da lista como string
    // Percorre a lista do último elemento até o primeiro
    while (atual) { 
        string += atual.valor + "->"; // Adiciona o valor do nó atual à string
        atual = atual.anterior; // Move para o nó anterior na lista
    }
    string += "null"; // Indica o fim da lista na impressão
    console.log(string); // Exibe a string no console
}
}

const lista = new listaDuplamenteEncadeada();

/* lista.inserirInicio(10); // lista = [10]
lista.inserirInicio(31); // lista = [31, 10]
lista.inserirInicio(52); // lista = [52, 31, 10]
lista.inserirInicio(40); // lista = [40, 52, 31, 10] */

lista.inserirFim(10); // lista = [10]
lista.inserirFim(31); // lista = [10, 31]
lista.inserirFim(52); // lista = [10, 31, 52]
lista.inserirFim(40); // lista = [10, 31, 52, 40]

lista.imprimirFrenteOrdemProximo();
lista.imprimirTrasOrdemAnterior();
