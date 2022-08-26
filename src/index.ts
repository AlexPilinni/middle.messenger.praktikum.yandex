import {Router} from "./core/routing/router";
import {LoginPage} from "./pages/login/login";
import {SigninPage} from "./pages/signin/signin";
// import {SignUpPage} from "./screens/signup/signup";
// import {SettingsPage} from "./screens/settings/settings";
// import {ChatPage} from "./screens/chat/chat";

export const router = new Router("app");

router
  .use("/", LoginPage)
  .use("/signin", SigninPage)
  // .use("/settings", SettingsPage)
  // .use("/messenger", ChatPage)
  .start();
