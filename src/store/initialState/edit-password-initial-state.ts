import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";
import {EditPasswordPageProps} from "../../pages/edit-password/types";

export const EDIT_PASSWORD_INITIAL_STATE: EditPasswordPageProps = {
  user: {
    display_name: 'Иван',
  },
  children: {
    passwordInputComponent: new TextInput({
      className: 'edit-password',
      id: 'password',
      type: 'password'
    }),
    repeatPasswordInputComponent: new TextInput({
      className: 'edit-password',
      id: 'repeat-password',
      type: 'password',
    }),
    newPasswordInputComponent: new TextInput({
      className: 'edit-password',
      id: 'new-password',
      type: 'password',
    }),
    buttonComponent: new Button({
      className: 'edit-password',
      type: 'submit',
      text: 'Сохранить',
    })
  },
}
