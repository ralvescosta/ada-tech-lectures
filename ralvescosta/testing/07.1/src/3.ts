import { test, describe, beforeEach, afterEach, before, it, todo, skip } from 'node:test'
import assert from 'node:assert'

function division(a: number, b: number): number {
  const tipo = process.env.TYPE || 'default'

  if (tipo === 'default') {
    return a / b
  }

  return b / a
}

describe('my suite test', () => {
  before(() => {
    console.log('running...')
  })

  beforeEach(() => {
    process.env.TYPE = 'default'
  })

  test('deve retornar o valor corretamente', t => {
    const resultadoEsperado = 10
    const resultado = division(100, 10)

    assert.equal(resultado, resultadoEsperado, 'o resultado esperado deveria ser 10')
  })

  test('deve executar a divisão seguindo a devida ordem dos atributos', t => {
    const resultadoEsperado = 5
    const resultado = division(10, 2)

    assert.equal(resultado, resultadoEsperado, 'o resultado esperado deveria ser 5')
  })

  skip('neste momento este test precisa ser ignorado', () => {

  })

  todo('este test precisa ser implementado', () => {

  })
})