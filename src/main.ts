class Validator {
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

  isNumber(): this {
    if (typeof this.value !== 'number' || isNaN(this.value)) {
      this.isValid = false
    }
    return this
  }

  isRequired(): this {
    if (this.value === null || this.value === undefined) {
      this.isValid = false
    }
    return this
  }

  isEmail(): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (typeof this.value !== 'string' || !emailRegex.test(this.value)) {
      this.isValid = false
    }
    return this
  }

  isBoolean(): this {
    if (typeof this.value !== 'boolean') {
      this.isValid = false
    }
    return this
  }

  isInRange(min: number, max: number): this {
    if (
      typeof this.value !== 'number' ||
      this.value < min ||
      this.value > max
    ) {
      this.isValid = false
    }
    return this
  }

  isDate(): this {
    if (!(this.value instanceof Date) || isNaN(this.value.getTime())) {
      this.isValid = false
    }
    return this
  }

  getResult(): boolean {
    return this.isValid
  }
}

export function validator(value: any): Validator {
  return new Validator(value)
}
