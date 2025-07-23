//
let serie = {
    nome: "High School Music",
    dataLancamento: 2007,
    atores: ["zac efron", "client eastwood", "arthur morgan"],
    status: "finalizada",
    classificao: 18,
    numeroTemporadas:{
        temp1: 12,
        temp2: 1,
        temp3: 0
    },
    mostrarCaracteristicas: function(){
        return `O nome da serie é ${this.nome} a classsificação é para maiores ${this.classificao} e ela está ${this.status}`;
    }
}
//console.log(serie.mostrarCaracteristicas());

let livro ={
    titulo: "O hobbit",
    autor:"J.R.R Tolkien",
    ano:1995,

    mostrarCaracteristicas: function() {
        return `o nome do livro é ${this.titulo}, o seu autor é ${this.autor} e ele foi lançado em ${this.ano}`;
    }
}
//console.log(livro.titulo);// acessar atributo 
//console.log(livro.mostrarCaracteristicas());

let atleta = {
    nome: "CR7",
    time: "Real madrid",
    esporte:"Futebol",
    melhorAmigo:"Messi",

    celebrarVitoria: function() {
        return `SIIIIIIIIIIIIIIIIIIIIIIIIIII`
    }
}

//console.log(atleta.celebrarVitoria());

let atletaSecundario = atleta;
atletaSecundario.arquival = "ganso"; // adiciona um novo atributo
//console.log(atleta);
//console.log(atletaSecundario)

//construtor

function anime(nome, protagonista, antagonista, nota){
    this.nome = nome;
    this.protagonista = protagonista;
    this.antagonista = antagonista;
    this.nota = nota;

    this.mostrarAnime = function(){
        return `
            INFORMAÇÕES DO ANIME
            nome: ${this.nome},
            protagonista: ${protagonista},
            antagonista: ${antagonista},
            nota: ${nota}.        
        ` // podemos retornar apenas os atributos
    }
}

let naruto = new anime("Boruto", "Naruto", "Sasuke", 1000); // CRIANDO UM ANIME
//console.log(naruto.mostrarAnime());

let personagens = [["Killua", "Mustang", "Minato", "Aiorous"]];
for ( let personagem in personagens){ // para em (for in) podemos usar qualquer nome no lugar do personagem
    console.log(personagens[personagem])
}

 let palavra = "teste";
for(let char of palavra){
    console.log(char)
}

/* - for...in: Itera sobre as propriedades enumeráveis de um objeto, retornando as chaves (nomes das propriedades). 
Ele pode ser usado para percorrer objetos, mas não é ideal para arrays, pois pode incluir propriedades herdadas.
 */

/* const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]); // Saída: "a 1", "b 2", "c 3"
} */


/* - for...of: Itera sobre valores de objetos iteráveis, como arrays, strings,
 mapas e conjuntos. Ele retorna diretamente os valores, tornando-o mais adequado para percorrer arrays.
 */
/*   const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // Saída: 10, 20, 30
} */