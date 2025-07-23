function formatarData(data){
    let dia = data.getDate().toString().padStart(2, "0"); // padStart acrescenta algo
    let mes = (data.getMonth()+1).toString().padStart(2, "0");
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`

}
const prompt = require('prompt-sync')();

/* let data;
let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mes: "));
let ano = Number(prompt("Digite o ano: "));
data = new Date(ano, mes-1, dia);
console.log(formatarData(data)); */

// gerar numero randomico entre dois valores
function gerarNumeroAleatorio(intervaloMin, intervaloMax){ // math.random() retorna um aleatorio entre 0 e 1
let numeroAleatorio = Math.floor(Math.random() * (intervaloMax - intervaloMin + 1)) + intervaloMin;
return numeroAleatorio;
}
let intervaloMin = Number(prompt("Digite o primeiro intervalo: "));
let intervaloMax = Number(prompt("Digite o fim do intervalo: "));
console.log(gerarNumeroAleatorio(intervaloMin, intervaloMax));