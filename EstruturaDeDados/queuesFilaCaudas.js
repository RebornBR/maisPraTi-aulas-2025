// Classe que representa um nó na fila
class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null; // Ponteiro para o próximo nó
    }
}

// Classe que representa a fila
class Queue {  
    constructor() {
        this.frentePrimeiro = null; // Referência para o primeiro elemento da fila
        this.traseiroUltimo = null; // Referência para o último elemento da fila
        this.size = 0; // Tamanho da fila
    }

    // Método para adicionar um elemento à fila
    enqueue(value) {
        let newNode = new Node(value);
        
        if (this.traseiroUltimo) {
            this.traseiroUltimo.proximo = newNode; // O último nó aponta para o novo nó
        }

        this.traseiroUltimo = newNode; // Atualizamos o último nó

        if (!this.frentePrimeiro) {
            this.frentePrimeiro = newNode; // Se a fila estava vazia, o novo nó vira o primeiro
        }

        this.size++; // Incrementamos o tamanho da fila
    }
    
    // Método para remover o primeiro elemento da fila
    deQueue() {
        if (!this.frentePrimeiro) {
            console.log("A fila está vazia");
            return;
        }

        console.log("Removendo: " + this.frentePrimeiro.valor);
        this.frentePrimeiro = this.frentePrimeiro.proximo; // Atualizamos a referência do primeiro nó

        // Se após a remoção, não houver mais elementos, atualizamos traseiroUltimo para null
        if (!this.frentePrimeiro) {
            this.traseiroUltimo = null;
        }

        this.size--; // Decrementamos o tamanho da fila
    }

    // Método para retornar o primeiro elemento da fila sem removê-lo
    frontPeekRetornarPrimeiroElemento() {
        if (this.frentePrimeiro) {
            return this.frentePrimeiro.valor; // Retornamos o valor do primeiro elemento
        } else {
            return null; // Caso a fila esteja vazia
        }
    }

    // Método para verificar se a fila está vazia
    isEmptyEstáVazia() {
        return this.size === 0; // Retorna um booleano indicando se a fila está vazia
    }

    // Método para retornar o tamanho da fila
    sizeTamanho() {
        return this.size; // Retorna o número de elementos na fila
    }
}

// Criando uma instância da fila e testando os métodos
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Primeiro elemento:", queue.frontPeekRetornarPrimeiroElemento()); // Deve retornar 10
console.log("Tamanho da fila:", queue.sizeTamanho()); // Deve retornar 3

queue.deQueue(); // Remove 10
console.log("Novo primeiro elemento:", queue.frontPeekRetornarPrimeiroElemento()); // Agora será 20

console.log("A fila está vazia?", queue.isEmptyEstáVazia()); // Deve retornar false