import {EditPasswordPageProps} from "../../pages/edit-password/types";

export const EDIT_PASSWORD_INITIAL_STATE: EditPasswordPageProps = {
  user: {
    display_name: 'Иван',
  },
  passwordInputComponent:{
    className: 'edit-password',
    id: 'password',
    type: 'password'
  },
  repeatPasswordInputComponent:{
    className: 'edit-password',
    id: 'repeat-password',
    type: 'password',
  },
  newPasswordInputComponent:{
    className: 'edit-password',
    id: 'new-password',
    type: 'password',
  },
  buttonComponent: {
    className: 'edit-password',
    type: 'submit',
    text: 'Сохранить',
  }
}
