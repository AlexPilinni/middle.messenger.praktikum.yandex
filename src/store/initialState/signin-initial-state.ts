import {SignInPageProps} from "../../pages/signin/types";

export const SIGNIN_INITIAL_STATE: SignInPageProps = {
  title: 'Вход',
  loginInputComponent: {
    className: 'signin-form',
    label: 'Логин',
    id: 'login',
    type: 'text'
  },
  passwordInputComponent: {
    className: 'signin-form',
    label: 'Пароль',
    id: 'password',
    type: 'password'
  },
  buttonComponent: {
    className: 'signin-form',
    type: 'submit',
    text: 'Авторизоваться'
  }
}
