function fatorial(n) {
    if (n === 0) {
        return 1; // caso base, a gente começa aos calculos assim que ele é alcançado
    } else {
        let resultado = n * fatorial(n - 1);
        /*
        5 * fatorial(n - 1)
        4 * fatorial(n - 1)
        3 * fatorial(n - 1)
        2 * fatorial(n - 1)
        1 * fatorial(n - 1)

        1 * 1 = 1
        2 * 1 = 2
        3 * 2 = 6
        4 * 6 = 24
        5 * 24 = 120
        */
        console.log(`Fatorial de ${n} = ${n} * fatorial(${n - 1}) = ${resultado}`); // Mostra o cálculo sendo feito
        /*
        fatorial(1) = 1 * 1 = 1
        fatorial(2) = 2 * 1 = 2
        fatorial(3) = 3 * 2 = 6
        fatorial(4) = 4 * 6 = 24
        fatorial(5) = 5 * 24 = 120
        */
        return resultado;
    }
}

console.log(`Resultado final: ${fatorial(5)}`);
// outro exemplo recursividade

function soma(n){
  if (n === 1){ // caso base
    return 1
  }else{
    return n + soma(n-1)
  }
}

console.log(soma(5))

// outro exemplo(copilot)

function fibonacci(n) {
    if (n <= 0) {
        return "Número inválido";
    } else if (n === 1) {
        return 0; // caso base, a gente começa aos calculos assim que ele é alcançado
    } else if (n === 2) {
        return 1; // caso base, a gente começa aos calculos assim que ele é alcançado
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
        /*
fibonacci(9) + fibonacci(8)
fibonacci(9) = fibonacci(8) + fibonacci(7)
fibonacci(8) = fibonacci(7) + fibonacci(6)
fibonacci(7) = fibonacci(6) + fibonacci(5)
fibonacci(6) = fibonacci(5) + fibonacci(4)
fibonacci(5) = fibonacci(4) + fibonacci(3)
fibonacci(4) = fibonacci(3) + fibonacci(2)
fibonacci(3) = fibonacci(2) + fibonacci(1)
fibonacci(2) = 1 // chega no 2 e retorna 1
fibonacci(1) = 0 // chega no 1 e retorna 0 
fibonacci(3) = 1
fibonacci(4) = 2
fibonacci(5) = 3
fibonacci(6) = 5
fibonacci(7) = 8
fibonacci(8) = 13
fibonacci(9) = 21
fibonacci(10) = 34  
        */
    }
}

// Exemplo de uso
const numero = 10;
console.log(`Fibonacci(${numero}) =`, fibonacci(numero));
