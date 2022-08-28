import {HandleFormService} from "../../services/handle-form-servise";
import {router} from "../../index";
import {Events} from "../../core/types";
import {
  ChangeUserPasswordController
} from "../../controllers/profile/change-user-password-controller";


class EditPasswordService {
  protected handleFormService: HandleFormService
  public editPasswordEvents: Events

  constructor() {
    this.handleFormService = new HandleFormService()
    this.editPasswordEvents = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): Events {
  return {
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
        fn: (event) => {
          event.preventDefault();

          const formData = handleFormService.handleFormSubmit(event)
          ChangeUserPasswordController.change(formData)

          setTimeout(()=> router.go('/profile'),1000)
        }
      }
    ],
  }
}

const editPasswordService = new EditPasswordService();

export const {editPasswordEvents} = editPasswordService;
