import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";
import {SignUpPageProps} from "../../pages/signup/types";

export const SIGNUP_INITIAL_STATE: SignUpPageProps = {
  title: 'Вход',
  emailInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Почта',
    id: 'email',
    type: 'text',
  }),
  loginInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Логин',
    id: 'login',
    type: 'text',
  }),
  firstnameInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Имя',
    id: 'first_name',
    type: 'text',
  }),
  secondnameInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Фамилия',
    id: 'second_name',
    type: 'text',
  }),
  phoneInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Телефон',
    id: 'phone',
    type: 'text',
  }),
  passwordInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Пароль',
    id: 'password',
    type: 'password',
  }),
  repeatPasswordInputComponent: new TextInput({
    className: 'signup-form',
    label: 'Пароль(еще раз)',
    id: 'repeat-password',
    type: 'password',
  }),
  buttonComponent: new Button({
    className: 'signup-form',
    type: 'submit',
    text: 'Зарегистрироваться'
  })
}
