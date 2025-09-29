package com.t1.springbasics.exercicioIoC;

/**
 * Sabe ler e gravar o total.
 */
interface TotalGateway {
    int load();            // Lê o total atual

    void save(int total);  // Persiste o novo total
}
