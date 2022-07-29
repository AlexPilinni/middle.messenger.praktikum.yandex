import {Children, Props} from '../../core/types';
import {TextInput} from "../../components/text-input/text-input";
import {HandleFormService} from "../../services/handle-form-servise";
import {Button} from "../../components/button/button";

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
        label: 'Login',
        id: 'login',
        type: 'text',
        required: true,
        errorMessage: null
      }),
      passwordInputComponent: new TextInput({
        className: 'login-form',
        label: 'Password',
        id: 'password',
        type: 'password',
        required: true,
        errorMessage: null
      }),
      buttonComponent: new Button({
        className: 'login-form',
        type: 'submit',
        text: 'Авторизоваться'
      })
    },
    events: {
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
          id: 'form',
          fn: handleFormService.handleFormSubmit
        }
      ],
    }
  }
}

const loginService = new LoginService();

export const {props} = loginService;
