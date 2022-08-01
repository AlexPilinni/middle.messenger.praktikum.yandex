import {Children, Props} from '../../core/types';
import {TextInput} from "../../components/text-input/text-input";
import {HandleFormService} from "../../services/handle-form-servise";
import {Button} from "../../components/button/button";

export interface EditPasswordPageProps extends Props {
  user: {
    display_name: string;
  };
  children?: Children;
}

class EditPasswordService {
  protected handleFormService: HandleFormService
  public props: EditPasswordPageProps
  constructor() {
    this.handleFormService = new HandleFormService()
    this.props = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): EditPasswordPageProps {
  return {
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
    events: {
      focus: [
        {
          id: 'password',
          fn: handleFormService.handleFieldFocus
        },
        {
          id: 'repeat-password',
          fn: handleFormService.handleFieldFocus
        },
        {
          id: 'new-password',
          fn: handleFormService.handleFieldFocus
        },
      ],
      blur: [
        {
          id: 'password',
          fn: handleFormService.handleFieldBlur
        },
        {
          id: 'repeat-password',
          fn: handleFormService.handleFieldBlur
        },
        {
          id: 'new-password',
          fn: handleFormService.handleFieldBlur
        },
      ],
      submit: [
        {
          id: 'edit-password-form',
          fn: handleFormService.handleFormSubmit
        }
      ],
    }
  }
}

const editPasswordService = new EditPasswordService();

export const {props} = editPasswordService;
