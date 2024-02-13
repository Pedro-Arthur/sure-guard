import { Validator } from './Validator'

/**
 * Returns a new Validator instance.
 * @param {any} value - The value to be validated.
 * @returns {Validator} - The Validator instance.
 */
export function validator(value: any): Validator {
  return new Validator(value)
}
