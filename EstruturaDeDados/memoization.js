// Função de memoização para otimizar cálculos repetitivos
function memoize(fn) {
    // Criamos um Map para armazenar os resultados de chamadas anteriores da função
    const cache = new Map();
    // Retornamos uma nova função que substitui a original e adiciona a lógica de cache
    return function(...args) {// args apenas um nome para parametro
        // Geramos uma chave única baseada nos argumentos fornecidos
        // Isso garante que funções com diferentes parâmetros armazenem e recuperem resultados corretamente
        const key = JSON.stringify(args);
        // Se já calculamos esse resultado antes, retornamos diretamente do cache
        if (cache.has(key)) {
            return cache.get(key);
        }
        // Caso contrário, executamos a função original com os argumentos passados
        // Utilizamos `.apply(this, args)` para manter o escopo e aplicar os argumentos corretamente
        const result = fn.apply(this, args);
        // Armazenamos o resultado no cache para futuras chamadas
        cache.set(key, result);
        // Retornamos o resultado da função, agora potencialmente armazenado para futuras reutilizações
        return result;
        /*
        em uma função de soma, a + b são as chaves e o resultado é o valor 
        exemplo:
         "cache": {
        "[3,5]": 8,
        "[2,4]": 6,
        "[10,15]": 25
        */ 
    };
}

// Função recursiva para calcular números de Fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return "Número inválido";
    } else if (n === 1) {
        return 0; // caso base, a gente começa aos calculos assim que ele é alcançado
    } else if (n === 2) {
        return 1; // caso base, a gente começa aos calculos assim que ele é alcançado
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Criando uma versão otimizada da função Fibonacci com memoização
const fastFib = memoize(function fibonacciMemoizado(n) { // ´podemos deixar a function sem um nome explicito
    if (n <= 0) {
        return "Número inválido"; // Valida números negativos ou zero
    } else if (n === 1) {
        return 0; // Primeiro número da sequência
    } else if (n === 2) {
        return 1; // Segundo número da sequência
    } else {
        return fastFib(n - 1) + fastFib(n - 2); // Usa a versão memoizada
    }
});

// Comparação entre a versão padrão e a otimizada da função Fibonacci
console.log(fastFib(45)); // Executa a versão memoizada (mais rápida)
console.log(fibonacci(41)); // Executa a função sem memoização (mais lenta)
