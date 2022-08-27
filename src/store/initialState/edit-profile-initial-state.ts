import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";
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
  emailInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'email',
    type: 'text',
    initialValue: 'pochta@yandex.ru'
  }),
  loginInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'login',
    type: 'text',
    initialValue: 'ivanivanov'
  }),
  firstnameInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'firstname',
    type: 'text',
    initialValue: 'Иван'
  }),
  secondnameInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'secondname',
    type: 'text',
    initialValue: 'Иванов'
  }),
  nicknameInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'displayname',
    type: 'text',
    initialValue: 'Иван'
  }),
  phoneInputComponent: new TextInput({
    className: 'edit-profile',
    id: 'phone',
    type: 'text',
    initialValue: '+7 (909) 967 30 30'
  }),
  buttonComponent: new Button({
    className: 'edit-profile',
    type: 'submit',
    text: 'Сохранить',
  })
}
