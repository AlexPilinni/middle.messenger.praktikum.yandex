import {SCHEMA_VALIDATION} from "./Validation/shema";

export class FormValidationService {
  errors: Array<string> = []

  validateInput(element: HTMLInputElement): string | null {
    const {name, value} = element;
    console.log(element)
    console.log(name, value)
    const validators = SCHEMA_VALIDATION[name]
    this.errors = []
    validators.forEach(validator => {
      const message: string | null | ((n: number) => (string | null)) = validator(value)
      if(message) {
        if (typeof message === "string") {
          this.errors.push(message)
        }
      }
    })
    return this.errors.length ? this.errors[0] : null
  }
}
