import {SCHEMA_VALIDATION} from "./Validation/shema";

export class FormValidationService {
  errors: Array<string> = []

  validateInput(element: HTMLInputElement): string | null {
    const {name, value} = element;
    const validators = SCHEMA_VALIDATION[name]
    this.errors = []
    validators.forEach(validator => {
      const message: null | string = validator(value)
      if(message) {
        this.errors.push(message)
      }
    })
    return this.errors.length ? this.errors[0] : null
  }
}
