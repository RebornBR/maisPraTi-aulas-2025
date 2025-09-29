package com.t1.springbasics.exercicioIoC;

/**
 * Implementação simples: escreve mensagens no console.
 */
final class ConsoleMessageGateway implements MessageGateway {
    @Override
    public void show(String message) {
        System.out.println("[MSG] " + message);
    }
}
