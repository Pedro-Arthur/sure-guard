import { NumberValidator } from './NumberValidator'
import { StringValidator } from './StringValidator'

export class Validator {
  private readonly value: any

  constructor(value: any) {
    this.value = value
  }

  string(): StringValidator {
    return new StringValidator(this.value)
  }

  number(): NumberValidator {
    return new NumberValidator(this.value)
  }
}
