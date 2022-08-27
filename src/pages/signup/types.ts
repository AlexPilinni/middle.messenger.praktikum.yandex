import {Props} from "../../core/types";
import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";

export interface SignUpPageProps extends Props {
  title: string;
  emailInputComponent: TextInput;
  loginInputComponent: TextInput;
  firstnameInputComponent: TextInput;
  secondnameInputComponent: TextInput;
  phoneInputComponent: TextInput;
  passwordInputComponent: TextInput;
  repeatPasswordInputComponent: TextInput;
  buttonComponent: Button
}
