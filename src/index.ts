import {Router} from "./core/routing/router";
import {SignInPage} from "./pages/signin/signin";
import {SignUpPage} from "./pages/signup/signup";
import {ProfilePage} from "./pages/profile/profile";
import {MessengerPage} from "./pages/messenger/messenger";
import {EditProfilePage} from "./pages/edit-profile/edit-profile";
import {EditPasswordPage} from "./pages/edit-password/edit-password";
import {ClientErrorPage} from "./pages/404/404";
import {ServerErrorPage} from "./pages/500/500";

export const router = new Router("app");
router
  .use("/", SignInPage)
  .use("/signup", SignUpPage)
  .use("/messenger", MessengerPage)
  .use("/profile", ProfilePage)
  .use("/edit-profile", EditProfilePage)
  .use("/edit-password", EditPasswordPage)
  .use("/500", ServerErrorPage)
  .setFallBack("/404", ClientErrorPage)
  .start();
