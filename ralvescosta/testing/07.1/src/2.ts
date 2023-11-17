import { test, describe, beforeEach, afterEach, before, it, todo, skip } from 'node:test'
import assert from 'node:assert'

function division(a: number, b: number): number {
  return a / b
}

describe('my suite test', () => {
  test('deve executar a divisão seguindo a devida ordem dos atributos', t => {
    const resultadoEsperado = 5
    const resultado = division(10, 2)

    assert.equal(resultado, resultadoEsperado, 'o resultado esperado deve ser 5')
  })

  skip('neste momento este test precisa ser ignorado', () => {

  })

  todo('este test precisa ser implementado', () => {

  })
})