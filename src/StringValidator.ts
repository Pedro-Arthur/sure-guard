export class StringValidator {
  private readonly value: any
  private isValid: boolean

  constructor(value: any) {
    this.value = value
    this.isValid = true
  }

  isString(): this {
    if (typeof this.value !== 'string') {
      this.isValid = false
    }
    return this
  }

  isMaxSize(maxSize: number): this {
    if (this.value.length > maxSize) {
      this.isValid = false
    }
    return this
  }

  isMinSize(minSize: number): this {
    if (this.value.length < minSize) {
      this.isValid = false
    }
    return this
  }

  isEmail(): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

    if (typeof this.value !== 'string' || !emailRegex.test(this.value)) {
      this.isValid = false
    }
    return this
  }

  isAlphanumeric(): this {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/

    if (typeof this.value !== 'string' || !alphanumericRegex.test(this.value)) {
      this.isValid = false
    }
    return this
  }

  getResult(): boolean {
    return this.isValid
  }
}
