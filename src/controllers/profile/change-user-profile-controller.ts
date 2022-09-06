import {Options, ResponseType} from "../../services/http-service";
import {Indexed} from "../../core/types";
import {ErrorResponse} from "../../api/types";
import {
  ChangeUserProfileAPI,
  UserProfileResponse
} from "../../api/profile/change-user-profile-api";
import store from "../../store/store";
import {ProfilePageProps} from "../../pages/profile/types";

const EDIT_PROFILE_PAGE_EVENT_NAME = "EditProfilePage";
const validationKeys = ['first_name', 'second_name', 'display_name', 'login', 'email', 'phone'];

type UserProfileFormModel = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

const changeUserProfileAPI = new ChangeUserProfileAPI();

export class ChangeUserProfileController {
  static async changeData(data: Indexed): Promise<void> {
    try {
      const isValid = userProfileValidator(data);

      if (!isValid) {
        throw new Error('Settings form data does not correspond to User Profile Form Model type');
      }

      changeUserProfileAPI.put(prepareDataToRequest(data))
        .then((response: UserProfileResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set('editProfilePage', prepareDataToStore(response), EDIT_PROFILE_PAGE_EVENT_NAME);
        })
        .catch((error) => {
          console.error(error, data);
        })
    } catch (error) {
      console.error(error, data);
    }
  }
}

function isErrorResponse(response: Indexed): response is ErrorResponse {
  return !!response?.reason;
}

function userProfileValidator(data: Indexed): data is UserProfileFormModel {
  const keysArray = Object.keys(data);

  return validationKeys.every((key: string) => keysArray.includes(key));
}

function prepareDataToRequest(data: UserProfileFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      'content-type': 'application/json',
    },
    data: data,
  }
}

function prepareDataToStore(data: UserProfileResponse): ProfilePageProps {
  const state = store.getState();

  return {
    ...state.editProfilePage,
        user: {
          email: data.email,
          login: data.login,
          first_name: data.first_name,
          second_name: data.second_name,
          display_name: data.display_name,
          phone: data.phone
        }
  }
}
