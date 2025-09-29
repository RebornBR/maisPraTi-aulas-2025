package com.t1.springbasics.exercicioIoC;

/**
 * Regra: somar um valor ao total e anunciar o novo total.
 * Não conhece classes concretas; só conhece os contratos (interfaces) acima.
 */
final class CounterService {
    private final TotalGateway totals;
    private final MessageGateway messages;

    public CounterService(TotalGateway totals, MessageGateway messages) {
        this.totals = totals;
        this.messages = messages;
    }

    /**
     * Soma 'value' ao total, persiste e anuncia.
     */
    public void add(int value) {
        int current = totals.load();
        int updated = current + value;
        totals.save(updated);
        messages.show("Somado " + value + ". Novo total = " + updated);
    }
}
