/**
 * Class for validating strings.
 */
export class StringValidator {
  private readonly value: any
  private isValid: boolean

  /**
   * Creates a new StringValidator instance.
   * @param {any} value - The value to be validated.
   */
  constructor(value: any) {
    this.value = value
    this.isValid = true
  }

  /**
   * Checks if the value is of type string.
   * @returns {this} - The StringValidator instance.
   */
  isString(): this {
    if (typeof this.value !== 'string') {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the string size is less than or equal to a maximum.
   * @param {number} maxSize - The maximum value allowed.
   * @returns {this} - The StringValidator instance.
   */
  isMaxSize(maxSize: number): this {
    if (this.value.length > maxSize) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the string size is greater than or equal to a minimum.
   * @param {number} minSize - The minimum value allowed.
   * @returns {this} - The StringValidator instance.
   */
  isMinSize(minSize: number): this {
    if (this.value.length < minSize) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the string is a valid email address.
   * @returns {this} - The StringValidator instance.
   */
  isEmail(): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

    if (typeof this.value !== 'string' || !emailRegex.test(this.value)) {
      this.isValid = false
    }
    return this
  }

  /**
   * Checks if the string contains only alphanumeric characters.
   * @returns {this} - The StringValidator instance.
   */
  isAlphanumeric(): this {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/

    if (typeof this.value !== 'string' || !alphanumericRegex.test(this.value)) {
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
