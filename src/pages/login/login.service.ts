import {Children, Props} from '../../core/types';
import {TextInput} from "../../components/text-input/text-input";
import {HandleFormService} from "../../services/handle-form-servise";
import {Button} from "../../components/button/button";
import {router} from "../../index";
import {UserSignInController} from "../../controllers/auth/signin-controller";

export interface LoginPageProps extends Props {
  title: string;
  children?: Children;
}

class LoginService {
  protected handleFormService: HandleFormService
  public props: LoginPageProps
  constructor() {
    this.handleFormService = new HandleFormService()
    this.props = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): LoginPageProps {
  return {
    title: 'Вход',
    children: {
      loginInputComponent: new TextInput({
        className: 'login-form',
        label: 'Логин',
        id: 'login',
        type: 'text'
      }),
      passwordInputComponent: new TextInput({
        className: 'login-form',
        label: 'Пароль',
        id: 'password',
        type: 'password'
      }),
      buttonComponent: new Button({
        className: 'login-form',
        type: 'submit',
        text: 'Авторизоваться'
      })
    },
    events: {
      click: [
        {
          id: 'goToSignIn',
          fn: event => {
            event.preventDefault();
            router.go('/signin');
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
          id: 'login-form',
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
}

const loginService = new LoginService();

export const {props} = loginService;
