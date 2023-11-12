// As classes derivadas devem ser substituíveis por suas classes base. 
// Este princípio está intimamente relacionado à herança em OOP.

class Figura {
  public getArea(): number {
    return -1
  }
}

class Quadrado extends Figura {
   public getArea(): number {
    return -2
  }
}

