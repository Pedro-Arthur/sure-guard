import { NumberValidator } from './NumberValidator'
import { StringValidator } from './StringValidator'

/**
 * Class that manages the other validation classes.
 */
export class Validator {
  private readonly value: any

  /**
   * Creates a new Validator instance.
   * @param {any} value - The value to be validated.
   */
  constructor(value: any) {
    this.value = value
  }

  /**
   * Returns the class for string validation.
   * @returns {StringValidator} - The StringValidator instance.
   */
  string(): StringValidator {
    return new StringValidator(this.value)
  }

  /**
   * Returns the class for number validation.
   * @returns {NumberValidator} - The NumberValidator instance.
   */
  number(): NumberValidator {
    return new NumberValidator(this.value)
  }
}
