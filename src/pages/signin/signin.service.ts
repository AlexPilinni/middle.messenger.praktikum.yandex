import {Children, Props} from '../../core/types';
import {TextInput} from "../../components/text-input/text-input";
import {HandleFormService} from "../../services/handle-form-servise";
import {Button} from "../../components/button/button";

export interface SigninPageProps extends Props {
  title: string;
  children?: Children;
}

class SigninService {
  protected handleFormService: HandleFormService
  public props: SigninPageProps
  constructor() {
    this.handleFormService = new HandleFormService()
    this.props = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): SigninPageProps {
  return {
    title: 'Вход',
    children: {
      emailInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Почта',
        id: 'email',
        type: 'text',
      }),
      loginInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Логин',
        id: 'login',
        type: 'text',
      }),
      firstnameInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Имя',
        id: 'firstname',
        type: 'text',
      }),
      secondnameInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Фамилия',
        id: 'secondname',
        type: 'text',
      }),
      phoneInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Телефон',
        id: 'phone',
        type: 'text',
      }),
      passwordInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Пароль',
        id: 'password',
        type: 'password',
      }),
      repeatPasswordInputComponent: new TextInput({
        className: 'signin-form',
        label: 'Пароль(еще раз)',
        id: 'repeat-password',
        type: 'password',
      }),
      buttonComponent: new Button({
        className: 'signin-form',
        type: 'submit',
        text: 'Зарегистрироваться'
      })
    },
    events: {
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
          id: 'firstname',
          fn: handleFormService.handleFieldFocus
        },
        {
          id: 'secondname',
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
          id: 'firstname',
          fn: handleFormService.handleFieldBlur
        },
        {
          id: 'secondname',
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
          id: 'signin-form',
          fn: handleFormService.handleFormSubmit
        }
      ],
    }
  }
}

const signinService = new SigninService();

export const {props} = signinService;
