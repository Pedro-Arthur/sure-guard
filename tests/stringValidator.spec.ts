import { StringValidator } from '../src/StringValidator'

describe('StringValidator', () => {
  describe('isString', () => {
    test('should return true for a valid string', () => {
      const validator = new StringValidator('Hello')
      expect(validator.isString().getResult()).toBe(true)
    })

    test('should return false for a non-string value', () => {
      const validator = new StringValidator(123)
      expect(validator.isString().getResult()).toBe(false)
    })
  })

  describe('isMaxSize', () => {
    test('should return true for a string with size <= maxSize', () => {
      const validator = new StringValidator('Hello')
      expect(validator.isMaxSize(10).getResult()).toBe(true)
    })

    test('should return false for a string with size > maxSize', () => {
      const validator = new StringValidator('Hello, World!')
      expect(validator.isMaxSize(5).getResult()).toBe(false)
    })
  })

  describe('isMinSize', () => {
    test('should return true for a string with size >= minSize', () => {
      const validator = new StringValidator('Hello')
      expect(validator.isMinSize(3).getResult()).toBe(true)
    })

    test('should return false for a string with size < minSize', () => {
      const validator = new StringValidator('Hi')
      expect(validator.isMinSize(5).getResult()).toBe(false)
    })
  })

  describe('isEmail', () => {
    test('should return true for a valid email address', () => {
      const validator = new StringValidator('test@example.com')
      expect(validator.isEmail().getResult()).toBe(true)
    })

    test('should return false for an invalid email address', () => {
      const validator = new StringValidator('invalid-email')
      expect(validator.isEmail().getResult()).toBe(false)
    })
  })

  describe('isAlphanumeric', () => {
    test('should return true for an alphanumeric string', () => {
      const validator = new StringValidator('abc123')
      expect(validator.isAlphanumeric().getResult()).toBe(true)
    })

    test('should return false for a non-alphanumeric string', () => {
      const validator = new StringValidator('special-characters!')
      expect(validator.isAlphanumeric().getResult()).toBe(false)
    })
  })
})
