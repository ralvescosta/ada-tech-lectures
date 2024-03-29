## **BE-JS-009-TESTES-AUTOMATIZADOS**

### Aulas

<table>
  <tr>
    <th>Aula</th>
    <th>Temática</th>
    <th>Cronograma</th>
  </tr>

<tr>
  <td>Aula 1</td>
  <td>Introdução à Testes Automatizados de Software</td>
  <td>
    A problemática dos testes manuais;<br /><br />
    Vantagens ao adotar testes automatizados;<br /><br />
    Tipos mais comuns de teste de software (Unidade / Integração / Sistema);<br /><br />
    Metodologias de implementação (TDD / BDD);<br /><br />
    O que são testing frameworks; <br /> <br />
      - Jest <br /> <br />
      - Mocha <br /> <br />
    Assertion libraries; <br /> <br />
      - Chai <br /> <br />
      - Sinon Js <br /> <br />
    Mocking libraries; <br /> <br />
      - Faker js  <br /> <br />
    Coverage reports; <br /> <br />
      - Apresentar um exemplo pratico <br /> <br />
  </td>
</tr>

<tr>
  <td>Aula 2</td>
  <td>Setup e Aplicação Prática</td>
  <td>
    Dicas <br/><br />
    Apresentar a biblioteca Jest <br/><br />
    Configurar um projeto Typescript com Jest <br /><br />
    Triplo A <br/><br />
    test() e expect();<br /><br />
    Introdução ao uso de matchers;<br /><br />
    Como organizar os tests em uma aplicação;<br /><br />
    describe(() => {
      test(() => {
      })
    });<br /><br />
    Fazer alguns exemplos de funções e classes e criar tests; <br /><br />
  </td>
</tr>

<tr>
  <td>Aula 3</td>
  <td>Escrever testes com a metodologia TDD (parte 1)</td>
  <td>
    Implementar projeto: Biblioteca<br /><br /> (registrar livro, alugar livros, )
    Aplicar a metodologia TDD utilizando o conceito RGR (Red / Green / Refactor);<br /><br />
    Escrever os primeiros casos de teste (antes de implementar);<br /><br />
    Adicionar novos casos de testes;<br /><br />
    Refatorar a implementação (até os testes passarem). <br /><br />
    Descubra o que falta ser testado (ativando o code coverage).
  </td>
</tr>

<tr>
  <td>Aula 4</td>
  <td>Escrever testes com a metodologia TDD (parte 2) e Tests para códigos Assíncronos</td>
  <td>
    Configurar Express para possibilitar a conversão da Biblioteca para uma API HTTP;<br /><br />
    Apresentar SuperTest<br /><br />
    Configurar SuperTest no projeto;<br /><br />
    O que são códigos assíncronos?;<br /><br />
    Como o padrão de implementação (callback, promise, async/await) pode interferir nos seus testes?;<br /><br />
    TDD dos endpoints de (add, subtract, pow);<br /><br />
    Refatorar a implementação (até os testes passarem);<br /><br />
    Code coverage
  </td>
</tr>

<tr>
  <td>Aula 5</td>
  <td>Escrever Testes para Códigos Assíncronos (Parte 2)</td>
  <td>
    Entendendo o uso de promises;<br /><br />
    Entendendo o uso dos matchers.resolves() e .rejects();<br /><br />
    Testando e implementando códigos com promises;<br /><br />
    A importância de testar os casos de exceção (revisitando o uso de try/catch);<br /><br />
    Testando e implementando códigos com async/await.<br /><br />
    Estrategia de como adicionar tests em codebase que nao possui tests<br /><br />
  </td>
</tr>

<tr>
  <td>Aula 6</td>
  <td>Entendendo o uso de mocks</td>
  <td>
    O que são mocks, stubs e dummies (simulações) e como eles podem ajudar em nossos testes?;<br /><br />
    Entendendo a diferença entre mocks automáticos e manuais;<br /><br />
    Simulando valores de retorno e módulos da aplicação;<br /><br />
    Conhecendo novos matchers para uso com mocks.<br /><br />
  </td>
</tr>

<tr>
  <td>Aula 7</td>
  <td>Além do Jest: testes end-to-end com Cypress</td>
  <td>
    O que é Cypress e para que ele serve?;<br /><br />
    Apresentando o conceito de testes end-to-end;<br /><br />
    Instalando e configurando o Cypress;<br /><br />
    Escrevendo nossos primeiros testes;<br /><br />
    Testando uma aplicação real.
  </td>
</tr>

<tr>
  <td>Aula 8</td>
  <td>Utilizando tests para garantir a qualidade do software</td>
  <td>
    O que é pipeline;<br /><br />
    O que é um arquivo Yaml; <br /><br />
    O que é Github Actions;<br /><br />
    Como configurar uma Github Actions;<br /><br />
    Configurando nossa primeira Hello World Action;<br /><br />
    Configurado nossa action para executar nossos tests automatizados;<br /><br />
    Configurando proteção de branch no Github para bloquear merges em caso de falha;<br /><br />
  </td>
</tr>

<tr>
<td>Aula 9</td>
<td colspan="3">Aula dedicada à revisão do módulo, tirar dúvidas e fazer a devolutiva da avaliação por rubrica / autoavaliação.</td>
</tr>
</table>