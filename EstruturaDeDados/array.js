// formas de escrever array
let listaDeFruta = Array();
let listaDeNomes = ["Rodrigo", "Rogerio", "Matheus"];  // podemos atribuir valores ja na criaçao da tablea
// formas de escrever array

/* push - adiciona no último 
unshift - adiciona no primeiro 
pop - exclui o último 
shift - excluir o primeiro */


listaDeFruta[1] = "maça"; // atribui ao indice 1 a fruta maça
listaDeFruta[2] = "banana";
/* listaDeFruta["vermelhas"] = "morango";
console.table(listaDeFruta); // retorna no formato de uma tabela
console.table(listaDeNomes); 
console.table(listaDeFruta);
listaDeFruta.push("abacaxi"); // método para adicionar um item no fim do array
console.table(listaDeFruta);
listaDeFruta.unshift("morango"); // método para adicionar um item no começo do array
console.table(listaDeFruta);
listaDeFruta.pop(); // remove o item da ultima posicão do array
console.table(listaDeFruta);
listaDeFruta.shift(); // remove o primeiro item da posicão do array
console.table(listaDeFruta); */
let resultado = listaDeFruta.indexOf("banana") // retornar qual posicao se encontra a banana
console.log(resultado)