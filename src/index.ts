import {Router} from "./core/routing/router";
import {LoginPage} from "./pages/login/login";
import {SigninPage} from "./pages/signin/signin";
import {ProfilePage} from "./pages/profile/profile";
import {MessengerPage} from "./pages/messenger/messenger";
import {EditProfilePage} from "./pages/edit-profile/edit-profile";
import {EditPasswordPage} from "./pages/edit-password/edit-password";
import {ClientErrorPage} from "./pages/404/404";
import {ServerErrorPage} from "./pages/500/500";

export const router = new Router("app");

router
  .use("/", LoginPage)
  .use("/signin", SigninPage)
  .use("/messenger", MessengerPage)
  .use("/profile", ProfilePage)
  .use("/edit-profile", EditProfilePage)
  .use("/edit-password", EditPasswordPage)
  .use("/edit-password", EditPasswordPage)
  .use("/404", ClientErrorPage)
  .use("/404", ServerErrorPage)
  .start();
