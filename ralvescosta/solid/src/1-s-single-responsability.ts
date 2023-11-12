// Uma classe deve ter um, e apenas um, motivo para mudar. 
// Isso significa que uma classe deve ter apenas um trabalho ou responsabilidade.

class Teclado {
  public digitar(): void {}
}

class Computador {
  private teclado: Teclado

  constructor(teclado: Teclado) {
    this.teclado = teclado
  }

  public ligar(): void {}

  public desligar(): void {}

  public mostrarNoMonitor(): void {}
}