import {Children, Props} from '../../core/types';
import {TextInput} from "../../components/text-input/text-input";
import {HandleFormService} from "../../services/handle-form-servise";
import {Button} from "../../components/button/button";
import {router} from "../../index";

export interface EditProfilePageProps extends Props {
  user: {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
  };
  children?: Children;
}

class EditProfileService {
  protected handleFormService: HandleFormService
  public props: EditProfilePageProps
  constructor() {
    this.handleFormService = new HandleFormService()
    this.props = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): EditProfilePageProps {
  return {
    user: {
      email: 'pochta@yandex.ru',
      login: 'ivanivanov',
      first_name: 'Иван',
      second_name: 'Иванов',
      display_name: 'Иван',
      phone: '+7 (909) 967 30 30'
    },
    children: {
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
    },
    events: {
      click: [
        {
          id: 'goToChat',
          fn: event => {
            event.preventDefault();
            router.go('/messenger');
          },
        },
      ],
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
          id: 'displayname',
          fn: handleFormService.handleFieldFocus
        },
        {
          id: 'phone',
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
          id: 'displayname',
          fn: handleFormService.handleFieldBlur
        },
        {
          id: 'phone',
          fn: handleFormService.handleFieldBlur
        },
      ],
      submit: [
        {
          id: 'edit-profile-form',
          fn: handleFormService.handleFormSubmit
        }
      ],
    }
  }
}

const editProfileService = new EditProfileService();

export const {props} = editProfileService;
