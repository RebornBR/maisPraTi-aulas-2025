let professor = {
    nome:"Stark",
    disciplina:"fisica",
    notas:{ // notas é um objeto
        //alunos sao os atributos da notas e sao um array
        aluno1: [5, 2], // aluno 0 
        aluno2: [3, 2] // aluno 1
    }
}

let somaNotas = 0;
let numeroEstudantes = 0;
let qtdNotas = 0;
for(let aluno in professor.notas){ // para cada aluno
    numeroEstudantes++; // somo a quantidade de alunos em notas
    for(let nota of professor.notas[aluno]){  // para cada nota de aluno - indice 0 e dps o 1
    somaNotas += nota; // podemos usar o reduce
    qtdNotas++;
    }
}

let media = somaNotas / qtdNotas;
console.log(media);