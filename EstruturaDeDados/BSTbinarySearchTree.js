// Definição da classe Node, que representa um nó da árvore binária
class Node{
    constructor(valor){
        this.valor = valor;   // O valor armazenado no nó
        this.esquerda = null; // Referência para o filho à esquerda
        this.direita = null;  // Referência para o filho à direita
    }
}

// Definição da classe BinaryTree, que representa a árvore binária
class BinaryTree{
    constructor(){
        this.rootRaiz = null; // Inicialmente, a árvore está vazia
    }

    // Método para inserir um valor na árvore
    insert(valor){
        let novoNode = new Node(valor); // Cria um novo nó com o valor fornecido
        if(this.rootRaiz == null){ // Se a árvore estiver vazia, define o novo nó como raiz
            this.rootRaiz = novoNode;
            return;
        }
        this.insertNode(this.rootRaiz, novoNode); // Caso contrário, chama a função auxiliar para inserir o nó corretamente
    }
    
    // Método auxiliar para inserir um nó na árvore
    insertNode(nodeAtual, novoNode){
        if(novoNode.valor < nodeAtual.valor){ // Se o novo valor for menor, vai para a esquerda
            if(nodeAtual.esquerda === null){ // Se não houver filho esquerdo, insere o novo nó aqui
                nodeAtual.esquerda = novoNode;
            }else{
                this.insertNode(nodeAtual.esquerda, novoNode); // Caso contrário, chama a função recursivamente
            }
        }else{ // Se o novo valor for maior ou igual, vai para a direita
            if(nodeAtual.direita === null){ // Se não houver filho direito, insere o novo nó aqui
                nodeAtual.direita = novoNode;
            }else{
                this.insertNode(nodeAtual.direita, novoNode); // Caso contrário, chama a função recursivamente
            }
        }
    }

    // Método para percorrer a árvore em ordem (in-order traversal)
    inOrderTraversal(node = this.rootRaiz){
        if (node !== null){
            this.inOrderTraversal(node.esquerda); // Visita o filho esquerdo
            console.log(node.valor); // Exibe o valor do nó atual
            this.inOrderTraversal(node.direita); // Visita o filho direito
        }
    }

    // Método para buscar um valor na árvore
    search(valor, node = this.rootRaiz){
        if(node == null ){ // Se o nó for nulo, o valor não foi encontrado
            return false;
        }
        if(valor == node.valor){ // Se o valor do nó for o procurado, retorna verdadeiro
            return true;
        }

        if(valor < node.valor){ // Se o valor for menor, busca na subárvore esquerda
            return this.search(valor, node.esquerda);
        }else{ // Se o valor for maior, busca na subárvore direita
            return this.search(valor, node.direita);
        }
    }
}
const arvore = new BinaryTree();
arvore.insert(10);
arvore.insert(5);
arvore.insert(12);
arvore.insert(3);
arvore.insert(6);
arvore.insert(11);
arvore.insert(7);
arvore.insert(10);
arvore.insert(10);
arvore.inOrderTraversal();
console.log(arvore.search(3));