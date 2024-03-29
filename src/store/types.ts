import {SignInPageProps} from "../pages/signin/types";
import {SignUpPageProps} from "../pages/signup/types";
import {ProfilePageProps} from "../pages/profile/types";
import {EditProfilePageProps} from "../pages/edit-profile/types";
import {EditPasswordPageProps} from "../pages/edit-password/types";
import {ClientErrorsProps} from "../pages/404/types";
import {ServerErrorsProps} from "../pages/500/types";
import {ChatPageProps} from "../pages/chat/types";


export type State = {
  signInPage: SignInPageProps;
  signUpPage: SignUpPageProps;
  profilePage: ProfilePageProps;
  chatPage: ChatPageProps;
  editProfilePage: EditProfilePageProps;
  editPasswordPage: EditPasswordPageProps;
  clientErrorsPage: ClientErrorsProps;
  serverErrorsPage: ServerErrorsProps;
}
