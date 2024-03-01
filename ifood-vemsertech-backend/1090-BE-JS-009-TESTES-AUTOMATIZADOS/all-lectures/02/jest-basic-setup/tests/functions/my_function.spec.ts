import { MyMath } from '../../src/functions/my_function'

// A - arrange
// A  - act
// A - assert

describe('somaDois', () => {
  it('should return zero if input was negative number',() => {
    // arrange
    const myMath =  new MyMath()

    // act
    const result = myMath.addTwo(-1)

    // assert
    expect(result).toEqual(0)
  })

  it('should return correctly if the input was posit number', () => {
    // arrange
    const myMath =  new MyMath()

    // act
    const result = myMath.addTwo(1)

    // assert
    expect(result).toEqual(3)
  })
})