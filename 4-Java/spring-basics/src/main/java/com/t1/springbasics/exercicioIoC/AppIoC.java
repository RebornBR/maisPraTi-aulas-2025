package com.t1.springbasics.exercicioIoC;/*
 * Mini-programa para demonstrar Inversão de Controle (IoC) e Injeção de Dependência (DI)
 *
 * Ideia:
 * 1) Definimos DUAS “peças” (interfaces), que a regra precisa conhecer:
 *    - TotalGateway: sabe LER e GRAVAR o total
 *    - MessageGateway: sabe EXIBIR mensagens
 *
 * 2) Definimos a REGRA (CounterService): “somar um valor ao total e anunciar o novo total”.
 *    - A regra NÃO cria dependências (não dá new). Ela recebe as dependências no construtor.
 *
 * 3) No ponto de entrada (main), FORA da regra, escolhemos as IMPLEMENTAÇÕES CONCRETAS,
 *    instanciamos e INJETAMOS na regra — provando a IoC.
 *
 * 4) Rodamos somando dois valores e observamos as mensagens.
 *
 * 5) Para provar a IoC, TROCAMOS SOMENTE no ponto de entrada a implementação de TotalGateway,
 *    sem tocar na regra, e executamos de novo.
 */

// =========================
// 1) ABSTRAÇÕES (contratos)
// =========================

// ===============================
// 2) REGRA DE NEGÓCIO (sem “new”)
// ===============================

// ========================================
// 3) IMPLEMENTAÇÕES CONCRETAS (adaptadores)
// ========================================

// =============================
// 4) PONTO DE ENTRADA (IoC/DI)
// =============================

public class AppIoC {
    public static void main(String[] args) {
        // Escolha das implementações CONCRETAS (fora da regra):
        // ----------------------------------------------------
        // Versão A (padrão): total em memória simples
        TotalGateway totalGateway = new InMemoryTotalGateway(0);

        // // >>> Descomente esta linha e comente a de cima para "provar" a IoC:
        // TotalGateway totalGateway = new VerboseInMemoryTotalGateway(0);

        MessageGateway messageGateway = new ConsoleMessageGateway();

        // A regra recebe as dependências prontas (sem “dar new” internamente):
        CounterService contador = new CounterService(totalGateway, messageGateway);

        // 5) Rodar somando dois valores e observar as mensagens
        contador.add(10); // Somar 10
        contador.add(5);  // Somar 5

        // Se você alternar para VerboseInMemoryTotalGateway no ponto de entrada,
        // verá logs extras SEM mudar a regra CounterService.
    }
}