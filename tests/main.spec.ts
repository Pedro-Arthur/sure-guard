import { validator } from '../src/main'

describe('Validator', () => {
  test('isString should return true for a valid string', () => {
    const result = validator('hello').isString().getResult()
    expect(result).toBe(true)
  })

  test('isString should return false for a non-string value', () => {
    const result = validator(123).isString().getResult()
    expect(result).toBe(false)
  })

  test('isMaxSize should return true for a string within the maxSize', () => {
    const result = validator('hello').isMaxSize(10).getResult()
    expect(result).toBe(true)
  })

  test('isMaxSize should return false for a string exceeding the maxSize', () => {
    const result = validator('hello world').isMaxSize(5).getResult()
    expect(result).toBe(false)
  })
})
