export class Validator {
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

  isEmail(): this {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (typeof this.value !== 'string' || !emailRegex.test(this.value)) {
      this.isValid = false
    }
    return this
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

  isArray(): this {
    if (!Array.isArray(this.value)) {
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

  isDate(): this {
    if (!(this.value instanceof Date) || isNaN(this.value.getTime())) {
      this.isValid = false
    }
    return this
  }

  isNotEmpty(): this {
    if (
      this.value === null ||
      this.value === undefined ||
      (typeof this.value === 'string' && this.value.trim() === '') ||
      (Array.isArray(this.value) && this.value.length === 0)
    ) {
      this.isValid = false
    }
    return this
  }

  isObject(): this {
    if (
      typeof this.value !== 'object' ||
      this.value === null ||
      Array.isArray(this.value)
    ) {
      this.isValid = false
    }
    return this
  }

  getResult(): boolean {
    return this.isValid
  }
}
