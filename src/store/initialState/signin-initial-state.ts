import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";
import {SignInPageProps} from "../../pages/signin/types";

export const SIGNIN_INITIAL_STATE: SignInPageProps = {
  title: 'Вход',
  loginInputComponent: new TextInput({
    className: 'signin-form',
    label: 'Логин',
    id: 'login',
    type: 'text'
  }),
  passwordInputComponent: new TextInput({
    className: 'signin-form',
    label: 'Пароль',
    id: 'password',
    type: 'password'
  }),
  buttonComponent: new Button({
    className: 'signin-form',
    type: 'submit',
    text: 'Авторизоваться'
  })
}
