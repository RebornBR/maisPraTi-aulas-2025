package com.t1.springbasics.exercicioIoC;

/**
 * Implementação 2 (equivalente) para provar a IoC:
 * também guarda em memória, mas com “log” para diferenciar o comportamento visivelmente.
 */
final class VerboseInMemoryTotalGateway implements TotalGateway {
    private int total;

    public VerboseInMemoryTotalGateway(int initial) {
        this.total = initial;
        System.out.println("[VerboseTotal] inicial = " + total);
    }

    @Override
    public int load() {
        System.out.println("[VerboseTotal] load -> " + total);
        return total;
    }

    @Override
    public void save(int total) {
        System.out.println("[VerboseTotal] save " + this.total + " -> " + total);
        this.total = total;
    }
}
