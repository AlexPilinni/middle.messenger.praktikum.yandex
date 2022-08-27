import {Options, ResponseType} from "../../services/http-service";
import {router} from "../../index";
import {LogoutAPI} from "../../api/auth/logout-api";
import {ErrorResponse} from "../../api/types";

const logOutAPI = new LogoutAPI();

export class UserLogOutController {
  static async logOut(): Promise<void> {
    try {
      logOutAPI.create(prepareDataToRequest())
        .then((response: ErrorResponse | null) => {
          if (response) {
            throw new Error(response.reason);
          }
          console.log('UserLogOutController: ', response);
          router.go('/');
        })
        .catch((error) => {
          console.error(error);
        })
    } catch (error) {
      console.error(error);
    }
  }
}

function prepareDataToRequest(): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json
  }
}
