import {SIGNIN_INITIAL_STATE} from "./signin-initial-state";
import {SIGNUP_INITIAL_STATE} from "./signup-initial-state";
// import {MESSENGER_INITIAL_STATE} from "./messenger-initial-state";
import {PROFILE_INITIAL_STATE} from "./profile-initial-state";
import {CLIENT_ERRORS_INITIAL_STATE} from "./client-errors-initial-state";
import {SERVER_ERRORS_INITIAL_STATE} from "./server-errors-initial-state";
import {EDIT_PROFILE_INITIAL_STATE} from "./edit-profile-initial-state";
import {EDIT_PASSWORD_INITIAL_STATE} from "./edit-password-initial-state";
import {CHAT_INITIAL_STATE} from "./chat-initial-state";

export const INITIAL_STATE = {
  signInPage: SIGNIN_INITIAL_STATE,
  signUpPage: SIGNUP_INITIAL_STATE,
  // messengerPage: MESSENGER_INITIAL_STATE,
  profilePage: PROFILE_INITIAL_STATE,
  chatPage: CHAT_INITIAL_STATE,
  editProfilePage: EDIT_PROFILE_INITIAL_STATE,
  editPasswordPage: EDIT_PASSWORD_INITIAL_STATE,
  clientErrorsPage: CLIENT_ERRORS_INITIAL_STATE,
  serverErrorsPage: SERVER_ERRORS_INITIAL_STATE,
}
