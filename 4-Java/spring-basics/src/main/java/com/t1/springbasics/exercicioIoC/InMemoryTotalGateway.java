package com.t1.springbasics.exercicioIoC;

/**
 * Implementação 1 (default): total em memória simples.
 */
final class InMemoryTotalGateway implements TotalGateway {
    private int total;

    public InMemoryTotalGateway(int initial) {
        this.total = initial;
    }

    @Override
    public int load() {
        return total;
    }

    @Override
    public void save(int total) {
        this.total = total;
    }
}
