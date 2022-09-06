import {SignUpPageProps} from "../../pages/signup/types";

export const SIGNUP_INITIAL_STATE: SignUpPageProps = {
  title: 'Вход',
  emailInputComponent: {
    className: 'signup-form',
    label: 'Почта',
    id: 'email',
    type: 'text',
  },
  loginInputComponent: {
    className: 'signup-form',
    label: 'Логин',
    id: 'login',
    type: 'text',
  },
  firstnameInputComponent: {
    className: 'signup-form',
    label: 'Имя',
    id: 'first_name',
    type: 'text',
  },
  secondnameInputComponent: {
    className: 'signup-form',
    label: 'Фамилия',
    id: 'second_name',
    type: 'text',
  },
  phoneInputComponent: {
    className: 'signup-form',
    label: 'Телефон',
    id: 'phone',
    type: 'text',
  },
  passwordInputComponent: {
    className: 'signup-form',
    label: 'Пароль',
    id: 'password',
    type: 'password',
  },
  repeatPasswordInputComponent: {
    className: 'signup-form',
    label: 'Пароль(еще раз)',
    id: 'repeat-password',
    type: 'password',
  },
  buttonComponent: {
    className: 'signup-form',
    type: 'submit',
    text: 'Зарегистрироваться'
  }
}
