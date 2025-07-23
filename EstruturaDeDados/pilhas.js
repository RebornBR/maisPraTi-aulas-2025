// Classe que representa um nó na pilha
class Node {
    constructor(valor) {
        this.valor = valor; // Armazena o valor do nó
        this.proximo = null; // Inicialmente, o nó não aponta para nenhum próximo
    }
}

// Classe que representa a pilha
class pilha {
    constructor() {
        this.topo = null;  // Inicialmente, a pilha está vazia (topo é null)
        this.size = 0; // Variável para acompanhar o tamanho da pilha
    }

    // Método para adicionar um elemento ao topo da pilha
    pushAdicionarElementoTopo(valor) {
        let novoNo = new Node(valor); // Criamos um novo nó com o valor fornecido
        novoNo.proximo = this.topo; // O novo nó aponta para o nó que era o topo
        this.topo = novoNo; // Atualizamos o topo para ser o novo nó
        this.size++; // Incrementamos o tamanho da pilha
    }

    // Método para remover o elemento do topo da pilha
    popRemoverElementoTopo() {
        if (!this.topo) { // Se a pilha estiver vazia, retornamos null
            return null;
        } else {
            let valorRemovido = this.topo.valor; // Pegamos o valor do nó no topo
            this.topo = this.topo.proximo; // Atualizamos o topo para o próximo nó na pilha
            this.size--; // Decrementamos o tamanho da pilha
            return valorRemovido; // Retornamos o valor removido
        }
    }

    // Método para retornar o valor do topo da pilha sem removê-lo
    primeiroElementoDaPilha() {
        if (!this.topo) { // Se a pilha estiver vazia, retornamos null
            return null;
        } else {
            return this.topo.valor; // Retornamos o valor armazenado no topo
        }
    }

    // Método para verificar se a pilha está vazia
    estaVazia() {
        return this.topo === null; // Retorna true se o topo for null (pilha vazia)
    }

    // Método para retornar o tamanho da pilha
    sizeTamanhoPilha() {
        return this.size; // Retorna o número de elementos na pilha
    }
}
// Criando uma instância da pilha
let minhaPilha = new pilha();

// Testando se a pilha está inicialmente vazia
console.log("A pilha está vazia?", minhaPilha.estaVazia()); // true

// Adicionando elementos à pilha
minhaPilha.pushAdicionarElementoTopo(10);
minhaPilha.pushAdicionarElementoTopo(20);
minhaPilha.pushAdicionarElementoTopo(30);

// Exibindo o tamanho da pilha
console.log("Tamanho da pilha:", minhaPilha.sizeTamanhoPilha()); // 3

// Obtendo o elemento do topo sem removê-lo
console.log("Topo da pilha:", minhaPilha.primeiroElementoDaPilha()); // 30

// Removendo elementos da pilha
console.log("Elemento removido:", minhaPilha.popRemoverElementoTopo()); // 30
console.log("Novo topo da pilha:", minhaPilha.primeiroElementoDaPilha()); // 20

// Exibindo o tamanho da pilha após remoções
console.log("Tamanho da pilha após remoção:", minhaPilha.sizeTamanhoPilha()); // 2

console.log("Removendo os dois elementos restantes:")
// Removendo mais elementos
minhaPilha.popRemoverElementoTopo();
minhaPilha.popRemoverElementoTopo();
console.log("Tamanho da pilha após remoção:", minhaPilha.sizeTamanhoPilha());

// Verificando se a pilha está vazia após remoções
console.log("A pilha está vazia?", minhaPilha.estaVazia()); // true