import {EditProfilePageProps} from "../../pages/edit-profile/types";

export const EDIT_PROFILE_INITIAL_STATE: EditProfilePageProps = {
  user: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
  },
  emailInputComponent: {
    className: 'edit-profile',
    id: 'email',
    type: 'text',
    initialValue: 'pochta@yandex2.ru'
  },
  loginInputComponent: {
    className: 'edit-profile',
    id: 'login',
    type: 'text',
    initialValue: 'ivanivanov'
  },
  firstnameInputComponent: {
    className: 'edit-profile',
    id: 'first_name',
    type: 'text',
    initialValue: 'Иван'
  },
  secondnameInputComponent: {
    className: 'edit-profile',
    id: 'second_name',
    type: 'text',
    initialValue: 'Иванов'
  },
  nicknameInputComponent: {
    className: 'edit-profile',
    id: 'display_name',
    type: 'text',
    initialValue: 'Иван'
  },
  phoneInputComponent: {
    className: 'edit-profile',
    id: 'phone',
    type: 'text',
    initialValue: '+7 (909) 967 30 30'
  },
  buttonComponent:{
    className: 'edit-profile',
    type: 'submit',
    text: 'Сохранить',
  }
}
