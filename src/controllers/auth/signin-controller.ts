import {Options, ResponseType} from "../../services/http-service";
import {router} from "../../index";
import {SignInAPI} from "../../api/auth/signin-api";
import {Indexed} from "../../core/types";
import {ErrorResponse} from "../../api/types";

const validationKeys = ['login', 'password'];

type SignInFormModel = {
  login: string;
  password: string;
}

const signInAPI = new SignInAPI();

export class UserSignInController {
  static async signIn(data: Indexed): Promise<void> {
    try {
      const isValid = userSignInValidator(data);

      if (!isValid) {
        throw new Error('SignUp form data  does not correspond to Sign Up Form Model type');
      }

      signInAPI.create(prepareDataToRequest(data))
        .then((response: ErrorResponse | null) => {
          if (response) {
            throw new Error(response.reason);
          }
          console.log('UserSignInController: ', response);
          router.go('/messenger');
        })
        .catch((error) => {
          console.error(error, data);
        })
    } catch (error) {
      console.error(error, data);
    }
  }
}

function userSignInValidator(data: Record<string, unknown>): data is SignInFormModel {
  const keysArray = Object.keys(data);

  return validationKeys.every((key: string) => keysArray.includes(key));
}

function prepareDataToRequest(data: SignInFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      'content-type': 'application/json',
    },
    data: data,
  }
}
