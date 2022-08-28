import {HandleFormService} from "../../services/handle-form-servise";
import {router} from "../../index";
import {Events} from "../../core/types";
import {
  ChangeUserProfileController
} from "../../controllers/profile/change-user-profile-controller";

class EditProfileService {
  protected handleFormService: HandleFormService
  public editProfileEvents: Events
  constructor() {
    this.handleFormService = new HandleFormService()
    this.editProfileEvents = getProps(this.handleFormService)
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
          fn: (event) => {
            event.preventDefault();

            const formData = handleFormService.handleFormSubmit(event);
            ChangeUserProfileController.changeData(formData)
            setTimeout(()=> router.go('/profile'),1000)
          }
        }
      ],
    }
}

const editProfileService = new EditProfileService();

export const {editProfileEvents} = editProfileService;
