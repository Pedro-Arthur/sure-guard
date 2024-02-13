/**
 * Class for validating numbers.
 */
export class NumberValidator {
  private readonly value: any
  private isValid: boolean

  /**
   * Creates a new NumberValidator instance.
   * @param {any} value - The value to be validated.
   */
  constructor(value: any) {
    this.value = value
    this.isValid = true
  }

  /**
   * Checks if the value is of type number.
   * @returns {this} - The NumberValidator instance.
   */
  isNumber(): this {
    if (typeof this.value !== 'number') {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the value is greater than or equal to a minimum.
   * @param {number} minValue - The minimum value allowed.
   * @returns {this} - The NumberValidator instance.
   */
  isMinValue(minValue: number): this {
    if (this.value < minValue) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the value is less than or equal to a maximum.
   * @param {number} maxValue - The maximum value allowed.
   * @returns {this} - The NumberValidator instance.
   */
  isMaxValue(maxValue: number): this {
    if (this.value > maxValue) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the value is positive.
   * @returns {this} - The NumberValidator instance.
   */
  isPositive(): this {
    if (this.value <= 0) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the value is negative.
   * @returns {this} - The NumberValidator instance.
   */
  isNegative(): this {
    if (this.value >= 0) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the value is an integer number.
   * @returns {this} - The NumberValidator instance.
   */
  isInteger(): this {
    if (!Number.isInteger(this.value)) {
      this.isValid = false
    }
    return this
  }

  /**
   * Returns the result of the validation.
   * @returns {boolean} - The result of the validation.
   */
  getResult(): boolean {
    return this.isValid
  }
}
