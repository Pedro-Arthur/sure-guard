import { NumberValidator } from '../src/NumberValidator'

describe('NumberValidator', () => {
  describe('isNumber', () => {
    test('should return true for a valid number', () => {
      const validator = new NumberValidator(42)
      expect(validator.isNumber().getResult()).toBe(true)
    })

    test('should return false for a non-number value', () => {
      const validator = new NumberValidator('not a number')
      expect(validator.isNumber().getResult()).toBe(false)
    })
  })

  describe('isMinValue', () => {
    test('should return true for a value >= minValue', () => {
      const validator = new NumberValidator(10)
      expect(validator.isMinValue(5).getResult()).toBe(true)
    })

    test('should return false for a value < minValue', () => {
      const validator = new NumberValidator(3)
      expect(validator.isMinValue(5).getResult()).toBe(false)
    })
  })

  describe('isMaxValue', () => {
    test('should return true for a value <= maxValue', () => {
      const validator = new NumberValidator(8)
      expect(validator.isMaxValue(10).getResult()).toBe(true)
    })

    test('should return false for a value > maxValue', () => {
      const validator = new NumberValidator(15)
      expect(validator.isMaxValue(10).getResult()).toBe(false)
    })
  })

  describe('isPositive', () => {
    test('should return true for a positive number', () => {
      const validator = new NumberValidator(5)
      expect(validator.isPositive().getResult()).toBe(true)
    })

    test('should return false for a non-positive number', () => {
      const validator = new NumberValidator(0)
      expect(validator.isPositive().getResult()).toBe(false)
    })
  })

  describe('isNegative', () => {
    test('should return true for a negative number', () => {
      const validator = new NumberValidator(-5)
      expect(validator.isNegative().getResult()).toBe(true)
    })

    test('should return false for a non-negative number', () => {
      const validator = new NumberValidator(0)
      expect(validator.isNegative().getResult()).toBe(false)
    })
  })

  describe('isInteger', () => {
    test('should return true for an integer', () => {
      const validator = new NumberValidator(7)
      expect(validator.isInteger().getResult()).toBe(true)
    })

    test('should return false for a non-integer', () => {
      const validator = new NumberValidator(3.14)
      expect(validator.isInteger().getResult()).toBe(false)
    })
  })
})
