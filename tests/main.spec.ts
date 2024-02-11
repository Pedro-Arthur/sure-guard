import { validator } from '../src/main'

describe('Validator', () => {
  test('isString should return true for a valid string', () => {
    const result = validator('hello').string().isString().getResult()
    expect(result).toBe(true)
  })

  test('isString should return false for a non-string value', () => {
    const result = validator(123).string().isString().getResult()
    expect(result).toBe(false)
  })

  test('isMaxSize should return true for a string within the maxSize', () => {
    const result = validator('hello').string().isMaxSize(10).getResult()
    expect(result).toBe(true)
  })

  test('isMaxSize should return false for a string exceeding the maxSize', () => {
    const result = validator('hello world').string().isMaxSize(5).getResult()
    expect(result).toBe(false)
  })
})
