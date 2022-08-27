import {TextInput} from "../components/text-input/text-input";
import {Button} from "../components/button/button";
import {Link} from "../components/link/link";
import {SearchInput} from "../components/search-input/search-input";
import {Card} from "../components/card/card";
import {Errors} from "../components/errors/errors";
import {MessagesList} from "../components/messages/messages";

export const REGISTERED_COMPONENTS = {
  emailInputComponent: TextInput,
  loginInputComponent: TextInput,
  firstnameInputComponent: TextInput,
  secondnameInputComponent: TextInput,
  phoneInputComponent: TextInput,
  passwordInputComponent: TextInput,
  repeatPasswordInputComponent: TextInput,
  newPasswordInputComponent: TextInput,
  nicknameInputComponent: TextInput,
  buttonComponent: Button,
  linkComponent: Link,
  searchInputComponent: SearchInput,
  cardsComponent: Card,
  messagesList: MessagesList,
  errorsComponent: Errors
}
