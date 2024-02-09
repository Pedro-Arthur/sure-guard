import { Validator } from './Validator'

class StringValidator extends Validator {
  isString(): this {
    if (typeof this.getValue() !== 'string') {
      this.setIsValid(false)
    }
    return this
  }

  isMaxSize(maxSize: number): this {
    if (this.getValue().length > maxSize) {
      this.setIsValid(false)
    }
    return this
  }

  isEmail(): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const value = this.getValue()

    if (typeof value !== 'string' || !emailRegex.test(value)) {
      this.setIsValid(false)
    }
    return this
  }
}

export { StringValidator }
