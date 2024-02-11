export class NumberValidator {
  private readonly value: any
  private isValid: boolean

  constructor(value: any) {
    this.value = value
    this.isValid = true
  }

  isNumber(): this {
    if (typeof this.value !== 'number') {
      this.isValid = false
    }
    return this
  }

  isInteger(): this {
    if (!Number.isInteger(this.value)) {
      this.isValid = false
    }
    return this
  }

  getResult(): boolean {
    return this.isValid
  }
}
