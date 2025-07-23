let matriz = [ [1,2,3], [4,5,6], [7,8,9] ];
console.table(matriz);
let soma = 0;
for(let i = 0; i < matriz.length; i++){
    soma += matriz[i][i] // calcular diagonal da matriz
}
console.log(soma)

let listaCoisas = Array();
listaCoisas["hardware"] = Array(); //declarar um array
listaCoisas["hardware"][0] = "placa de video";
listaCoisas["hardware"][1] = "notebook";
listaCoisas["filmes"] = ["senhor dos aneis"]; // outro jeito de declarar um array dentro do array
listaCoisas["filmes"][1] = "harry potter";

console.table(listaCoisas);