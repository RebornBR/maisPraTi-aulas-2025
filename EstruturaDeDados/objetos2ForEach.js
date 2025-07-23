const livraria = [
    {titulo: "Código Limpo", autor: "Martin", ano: 2019},
    {titulo: "The Gunslinger", autor: "Stephen King", ano: 1991},
    {titulo: "Laranja Mecânica", autor: "Nicole", ano: 1810},
    {titulo: "Pequeno Príncipe", autor: "Fabiana", ano: 1903},
    {titulo: "As Crônicas Marciana", autor: "Bradbury", ano: 2010},
]
/* // for of representa/retorna valor, for in representa/retorna indice
for(let livro of livraria){
    if(livro.ano < 2000){
        console.log(livro);
    }
} */
// utilizando filter
//const livrosAntigos = livraria.filter(livro => livro.ano < 2000);

// For each
let locadora = [
    {titulo: "Senhor dos Anéis", genero: "Fantasia"},
    {titulo: "Jogo da Imitação", genero: "Histórico"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Ilha do Medo", genero: "Terror"},
    {titulo: "Pulp Fiction", genero: "Ação"},
    {titulo: "Poderoso Chefão", genero: "Máfia"},
    {titulo: "DVD do Renight - Melhores Momentos", genero: "Histórico"},
    {titulo: "Aí, que vida!", genero: "Comédia"},
    {titulo: "Kill Bill", genero: "Ação"},
    {titulo: "Batman Forever", genero: "Herói"},
    {titulo: "Batman - Piada Mortal", genero: "Herói"},
    {titulo: "As Branquelas", genero: "Comédia"},
    {titulo: "Terno de 1 Bilhão de Dólares", genero: "Comédia"},
];

// ForEach
let contagemGenero = {}; // Cria um objeto
locadora.forEach(filme => { // Para cada filme na locadora
    if (contagemGenero[filme.genero]) { // Verifico se já existe um gênero com valor do atributo filme.genero no objeto contagemGenero
        contagemGenero[filme.genero]++; // Se já existe, somo mais um ao seu valor
    } else {
        contagemGenero[filme.genero] = 1; // Caso não exista, o valor do filme.genero agr passa a ser um atributo do objeto contagemGenero e o seu valor será 1
    }
});

console.table(contagemGenero);

//outro jeito

/* let filmesFantasia = [];
let filmesHistorico = [];
let filmesDrama = [];
let filmesTerror = [];
let filmesAcao = [];
let filmesMafia = [];
let filmesComedia = [];
let filmesHeroi = [];


for (let filme of locadora) {
    if (filme.genero === "Fantasia") {
        filmesFantasia.push(filme);
    } else if (filme.genero === "Histórico") {
        filmesHistorico.push(filme);
    } else if (filme.genero === "Drama") {
        filmesDrama.push(filme);
    } else if (filme.genero === "Terror") {
        filmesTerror.push(filme);
    } else if (filme.genero === "Ação") {
        filmesAcao.push(filme);
    } else if (filme.genero === "Máfia") {
        filmesMafia.push(filme);
    } else if (filme.genero === "Comédia") {
        filmesComedia.push(filme);
    } else if (filme.genero === "Herói") {
        filmesHeroi.push(filme);
    }
}
console.log(filmesFantasia.length + " Filmes de Fantasia:", filmesFantasia);
console.log(filmesHistorico.length + " Filmes Históricos:", filmesHistorico);
console.log(filmesDrama.length + " Filmes de Drama:", filmesDrama);
console.log(filmesTerror.length + " Filmes de Terror:", filmesTerror);
console.log(filmesAcao.length + " Filmes de Ação:", filmesAcao);
console.log(filmesMafia.length + " Filmes de Máfia:", filmesMafia);
console.log(filmesComedia.length + " Filmes de Comédia:", filmesComedia);
console.log(filmesHeroi.length + " Filmes de Herói:", filmesHeroi);
 */