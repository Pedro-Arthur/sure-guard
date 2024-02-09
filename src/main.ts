import { Validator } from './Validator'

export function validator(value: any): Validator {
  return new Validator(value)
}
