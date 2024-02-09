export class Validator {
  private readonly value: any
  private isValid: boolean

  constructor(value: any) {
    this.value = value
    this.isValid = true
  }

  protected getIsValid(): boolean {
    return this.isValid
  }

  protected getValue(): any {
    return this.value
  }

  protected setIsValid(isValid: boolean): void {
    this.isValid = isValid
  }

  getResult(): boolean {
    return this.getIsValid()
  }
}
