class Node{ // node = nó, qualquer nome podemos usar
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeadaSimples{
    constructor(){
        this.head = null; // primeiro item da lista
    }

    inserirNoInicio(valor){
        let novo = new Node(valor);
        novo.proximo = this.head;// para o primeiro elemento sera null
        this.head = novo;  // para o segundo elemento, novo.proximo será o primeiro elemento
        /**
        criamos o primeiro elemento da lista e o proximo 
        é null pq so tem um e esse primeiro elemento passa a ser o head,
        quando criamos o segundo elemento ele vai para o inicio da lista e vai 
        apontar agr pra o primeiro elemento e o segundo elemento vai passar a ser o head
        e assim continua
         */
    }

    imprimir() {
    let atual = this.head; // Inicializa uma variável para percorrer a lista, começando pelo primeiro nó
    let string = ""; // Inicializa uma string vazia para armazenar a representação da lista
    while (atual) { // Enquanto houver um nó na lista (ou seja, enquanto atual não for null)
        string += atual.valor + "->"; // Adiciona o valor do nó atual à string, seguido de "->"
        atual = atual.proximo; // Move para o próximo nó da lista
    }
    string += "null"; // Adiciona "null" ao final da string para indicar que a lista terminou
    console.log(string); // Exibe a string no console, mostrando a representação da lista
    }   
}

const lista = new ListaEncadeadaSimples();

lista.inserirNoInicio(10);
lista.inserirNoInicio(20);
lista.inserirNoInicio(30);
lista.inserirNoInicio(40);
lista.imprimir();