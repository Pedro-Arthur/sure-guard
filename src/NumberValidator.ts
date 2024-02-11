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

  isMinValue(minValue: number): this {
    if (this.value < minValue) {
      this.isValid = false
    }
    return this
  }

  isMaxValue(maxValue: number): this {
    if (this.value > maxValue) {
      this.isValid = false
    }
    return this
  }

  isPositive(): this {
    if (this.value <= 0) {
      this.isValid = false
    }
    return this
  }

  isNegative(): this {
    if (this.value >= 0) {
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
