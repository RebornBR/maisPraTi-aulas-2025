class TreeNode{// nó arvore
    constructor(valor){
        this.valor = valor;
        this.filhos = [];
    }

    addChild(node){ // adicionar filho
        this.filhos.push(node);
    }

    removeChild(valor){ // remover filho
        this.filhos = this.filhos.filter(filho => filho.valor !== valor); // filtra, mantendo apenas os que tiverem valor diferente ao que desejamos remover
    }
}

class Tree { // arvore
    constructor (rootValorRaiz){
        this.rootRaiz = new TreeNode(rootValorRaiz);// ao criarmos uma arvore, criamos um no, que sera a raiz da arvore, ou seja, nossa raiz passa a ser um nó TreeNode
    }

    traverseDFS(callback) { // refere-se à busca em profundidade (DFS - Depth First Search)
        function recurse(node){// recebe um nó
            callback(node); // para cada nó chamo a funçao de callback, utlizando o node como parametro na funçao
            node.filhos.forEach(filho => recurse(filho)); // para cada filho de um nó chamo a funçao recurse novamente
        }
        recurse(this.rootRaiz); // chamamos a funçao recurse que utiliza a raiz da arvore para começar a busca
    }
    
}

// criando a arvore e sua raiz
const arvore = new Tree("A");

// criando os nós(TreeNode)
const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");
const G = new TreeNode("G");
const H = new TreeNode("H");

// fazendo a ligaçao entre os nós
// A raiz da nossa avore agora tem 3 filhos(nó), ligados a ela
arvore.rootRaiz.addChild(B);
arvore.rootRaiz.addChild(C);
arvore.rootRaiz.addChild(D);

// adicionando outros nó aos filhos da raiz da arvore
B.addChild(E); // E agora é filho de B 
B.addChild(F); // F agora é filho de B 

C.addChild(G); // G agora é filho de C 
F.addChild(H); // H agora é filho de F(que é filho de B) 

function printNode(node){ // imprimir/Mostrar nó 
    console.log(node.valor); // a usamos como callback
}
function printTree(node, nivel = 0) { // imprimir mostrar em modelo arvore
    console.log(`${nivel}º Nível -> ` + " ".repeat(nivel * 2) + "|-" + node.valor); // Fazendo identaçao por espaço vazio
    node.filhos.forEach(filho => printTree(filho, nivel + 1)); 
}

console.log("Chamando a função de impressão MODELO ARVORE")
printTree(arvore.rootRaiz);
console.log("Chamando a função de impressão NORMAL")
arvore.traverseDFS(printNode);


