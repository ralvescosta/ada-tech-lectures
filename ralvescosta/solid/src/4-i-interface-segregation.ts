// Nenhum cliente deve ser forçado a depender de métodos que não utiliza. 
// É melhor ter muitas interfaces menores e específicas do que uma interface grande e de uso geral.

// Bad Interface

interface OperacoesDoUsuario {
  login(): void;
  logout(): void;

  cadastro(): void;

  movimentar(): void;
  pular(): void;
  correr(): void;

  trabalhar(): void;

  cadastrarAtividades(): void;
}

// Interface segregation 

interface OperacoesDeAutenticacaoDoUsuario {
  login(): void;
  logout(): void;  
}

interface OperacoesDeCadastroDoUsuario {
  cadastro(): void;
  cadastrarAtividade(): void;
}