// manipulacao string

/* console.log("dragon age".length);
console.log("dragon age".charAt(0)); // retorna a primeira letra
console.log("harry potter".indexOf("p")) // procura em qual posição está determinada letra
let nome = "robin";
console.log(nome);
nome = nome.replace("robin", "rodrigo d s a d"); // substitui 1 pelo outro
console.log(nome);
nome = nome.toUpperCase(); // trasformar em case alta e nome.toLowerCase(); case baixa
console.log(nome);
 */
/* let numero = 9.5;

// matematica

console.log(Math.ceil(numero)); // arredonda para cima
console.log(Math.floor(numero)); // arredonda para baixo
console.log(Math.round(numero));// arredonda para o mais proximo
console.log(Math.sqrt(81)); // raiz quadrada */

// datas

/* let data = new Date;
console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.toString());

let date1 = new Date(2025, 7, 5);
let date2 = new Date(2007, 7, 5);

console.log(date1.toString());
console.log(date2.toString());

console.log(date1.getTime());
console.log(date2.getTime());

let milissegundosEntreDatas = Math.abs((date1.getTime()) - date2.getTime());

console.log(milissegundosEntreDatas);

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000);

console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia)} dias`); */

function reverseString(string){
    return string.split('').reverse().join(''); // sprit separa as letras // reverse inverte as ordem  // join junta 
}
console.log(reverseString("Olá mundo"));
