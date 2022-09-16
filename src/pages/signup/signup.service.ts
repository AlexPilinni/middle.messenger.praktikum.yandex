import {HandleFormService} from "../../services/handle-form-servise";
import {router} from "../../index";

import {UserSignUpController} from "../../controllers/auth/signup-controller";
import {Events} from "../../core/types";

export class SignUpService {
  protected handleFormService: HandleFormService
  public signUpEvents: Events

  constructor() {
    this.handleFormService = new HandleFormService()
    this.signUpEvents = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): Events {
  return {
    click: [
      {
        id: 'goToLogin',
        fn: event => {
          event.preventDefault();
          router.go('/');
        },
      },
    ],
    focus: [
      {
        id: 'email',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'login',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'first_name',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'second_name',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'phone',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'password',
        fn: handleFormService.handleFieldFocus
      },
      {
        id: 'repeat-password',
        fn: handleFormService.handleFieldFocus
      },
    ],
    blur: [
      {
        id: 'email',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'login',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'first_name',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'second_name',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'phone',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'password',
        fn: handleFormService.handleFieldBlur
      },
      {
        id: 'repeat-password',
        fn: handleFormService.handleFieldBlur
      },
    ],
    submit: [
      {
        id: 'signup-form',
        fn: event => {
          const formData = handleFormService.handleFormSubmit(event);
          if (!formData) {
            return;
          }

          UserSignUpController.signUp(formData);
        },
      }
    ],
  }
}

const signUpService = new SignUpService();

export const {signUpEvents} = signUpService;
