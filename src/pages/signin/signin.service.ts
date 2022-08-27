import {HandleFormService} from "../../services/handle-form-servise";
import {router} from "../../index";
import {UserSignInController} from "../../controllers/auth/signin-controller";
import {Events} from "../../core/types";

class SignInService {
  protected handleFormService: HandleFormService
  public signInEvents: Events
  constructor() {
    this.handleFormService = new HandleFormService()
    this.signInEvents = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): Events {
  return {
      click: [
        {
          id: 'goToSignIn',
          fn: event => {
            event.preventDefault();
            router.go('/signup');
          },
        },
      ],
      focus: [
        {
          id: 'login',
          fn: handleFormService.handleFieldFocus
        },
        {
          id: 'password',
          fn: handleFormService.handleFieldFocus
        },
      ],
      blur: [
        {
          id: 'login',
          fn: handleFormService.handleFieldBlur
        },
        {
          id: 'password',
          fn: handleFormService.handleFieldBlur
        },
      ],
      submit: [
        {
          id: 'signin-form',
          fn: event => {
            const formData = handleFormService.handleFormSubmit(event);

            if (!formData) {
              return;
            }
            console.log(formData)
            UserSignInController.signIn(formData);
          }
        }
      ],
    }
}

const signInService = new SignInService();

export const {signInEvents} = signInService;
