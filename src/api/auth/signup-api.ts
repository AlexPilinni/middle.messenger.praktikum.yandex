import {BaseAPI} from "../base-api";
import {Http, Options} from "../../services/http-service";
import {ErrorResponse} from "../types";
import {host} from "../../constants";

export type SignUpResponse = {
  id: number;
}

const signUpAPIInstance = new Http(`${host}/api/v2/auth/signup`);

export class SignUpAPI extends BaseAPI {
  public create(options: Options): Promise<SignUpResponse | ErrorResponse> {
    return signUpAPIInstance.post<SignUpResponse | ErrorResponse>('', options)
      .then((data) => data);
  }
}
