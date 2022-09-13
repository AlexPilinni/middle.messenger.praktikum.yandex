import {FormValidationService} from "./form-validation-service";

export class HandleFormService {
  private readonly formValidationService: FormValidationService
  constructor() {
    this.formValidationService = new FormValidationService();
  }
  handleBlur(event: Event): void {
    const element = event.target as HTMLInputElement;
    const mainBlock = element.parentElement
    const errorBlock = (mainBlock as HTMLElement).lastChild;
    const invalid = this.formValidationService.validateInput(element);
    if (invalid) {
      (mainBlock as HTMLInputElement).classList.add('invalid');
      (errorBlock as HTMLElement).textContent = invalid
    }
  }

  handleFocus (event: Event): void {
    const element = event.target as HTMLInputElement;
    const mainBlock = element.parentElement
    const errorBlock = (mainBlock as HTMLElement).lastChild;
    (errorBlock as HTMLElement).textContent = '';
    (mainBlock as HTMLInputElement).classList.remove('invalid');
  }

  handleSubmit(event: Event): Record<string, string> | null {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    return this.serializeForm(form);
  }

  private serializeForm(formNode: HTMLFormElement): Record<string, string> | null {
    let isFormValid = true;
    const {elements} = formNode;
    const elementsArray = Array.from(elements).filter((element: HTMLInputElement | HTMLTextAreaElement) => Boolean(element.name));
    elementsArray.forEach(element => {
      const mainBlock = element.parentElement
      const errorBlock = (mainBlock as HTMLElement).lastChild;
      const invalid = this.formValidationService.validateInput(element as HTMLInputElement);

      if (invalid) {
        isFormValid = false;
        (mainBlock as HTMLElement).classList.add('invalid');
        (errorBlock as HTMLElement).textContent = invalid
      }
    })
    if (!isFormValid) {
      return null;
    }
    return Array.from(elements)
      .filter((element: HTMLInputElement) => Boolean(element.name))
      .reduce<Record<string, string>>((obj, element: HTMLInputElement) => {
        const {name, value} = element;

        obj[name] = value;
        // element.value = ''
        return obj;
      }, {});
  }
  handleFieldFocus = this.handleFocus.bind(this)
  handleFieldBlur = this.handleBlur.bind(this)
  handleFormSubmit = this.handleSubmit.bind(this)
}
