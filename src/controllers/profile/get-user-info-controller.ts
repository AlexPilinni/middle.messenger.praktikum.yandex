import {Options, ResponseType} from "../../services/http-service";
import {Indexed} from "../../core/types";
import {GetUserInfoAPI, UserInfoResponse} from "../../api/profile/get-user-info-api";
import {ErrorResponse} from "../../api/types";
import store from "../../store/store";
import {UserProfileResponse} from "../../api/profile/change-user-profile-api";
import {ProfilePageProps} from "../../pages/profile/types";
const PROFILE_PAGE_EVENT_NAME = "ProfilePage";

const getUserInfoAPI = new GetUserInfoAPI();

export class UserInfoController {
  static async getInfo(): Promise<any>{
    try {
      getUserInfoAPI.get(getOptions())
        .then((response: UserInfoResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          store.set('profilePage', prepareDataToStore(response), PROFILE_PAGE_EVENT_NAME);
        })
        .catch((error) => {
          console.error(error);
        })
    } catch (error) {
      console.error(error);
    }
  }
}

function isErrorResponse(response: Indexed): response is ErrorResponse {
  return !!response?.reason;
}

function getOptions(): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
  }
}

function prepareDataToStore(data: UserProfileResponse): ProfilePageProps {
  const state = store.getState();
  return {
    ...state.profilePage,
    user: {
      email: data.email,
      login: data.login,
      first_name: data.first_name,
      second_name: data.second_name,
      display_name: data.display_name,
      phone: data.phone,
      // avatar: data.avatar
    }
  }
}
