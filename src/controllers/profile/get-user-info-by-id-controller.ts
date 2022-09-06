import {Options, ResponseType} from "../../services/http-service";
import {Indexed} from "../../core/types";
import {ErrorResponse} from "../../api/types";
import {
  GetUserInfoByIdAPI,
  UserInfoByIdResponse
} from "../../api/profile/get-user-info-by-id-api";

const getUserInfoByIdAPI = new GetUserInfoByIdAPI();

export class UserInfoByIdController {
  static async getInfo(userId: string): Promise<UserInfoByIdResponse | void> {
    try {
      return getUserInfoByIdAPI.get(getOptions(), userId)
        .then((response: UserInfoByIdResponse | ErrorResponse) => {
          if (isErrorResponse(response)) {
            throw new Error(response.reason);
          }

          return response;
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
