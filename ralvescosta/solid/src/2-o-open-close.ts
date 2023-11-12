//  Entidades de software devem estar abertas para extensão, mas fechadas para modificação.

class Caixa {
  constructor(private desconto: Desconto) {
  }

  public valorDaCompra(valor: number): number {
    return this.desconto.calcular(valor) 
  }
}

class Desconto {
  public calcular(valor: number): number {
    return valor - 2
  }
}

class DescontoDePrimavera extends Desconto {
  public calcular(valor: number): number {
    return valor - 5    
  }
}

const caixa = new Caixa(new DescontoDePrimavera())

//
