const categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            { id: 2, nome: "Celulares", filhos: [] },
            { id: 3, nome: "Computadores", filhos: [
            { id: 4, nome: "Notebooks", filhos: [] }
            ]}
        ]
    },
    {
        id: 5,
        nome: "Roupas",
        filhos: []
    }
];

// utilzando recursividade
function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista) {// para cada categoria da lista
        console.log(" ".repeat(nivel * 2) + categoria.nome) // imprimo seu nome 
        if (categoria.filhos.length > 0){ // se os seus filhos tiverem ao menos um dado
            imprimirCategorias(categoria.filhos, nivel + 1) // chamo a funçao novamente
            // nivel é basicamente para colocar espaço na exibiçao do console
        }
    }
}          

imprimirCategorias(categorias);