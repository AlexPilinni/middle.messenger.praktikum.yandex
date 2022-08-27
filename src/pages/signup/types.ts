import {Props} from "../../core/types";
import {TextInputProps} from "../../components/text-input/text-input";
import {ButtonProps} from "../../components/button/button";

export interface SignUpPageProps extends Props {
  title: string;
  emailInputComponent: TextInputProps;
  loginInputComponent: TextInputProps;
  firstnameInputComponent: TextInputProps;
  secondnameInputComponent: TextInputProps;
  phoneInputComponent: TextInputProps;
  passwordInputComponent: TextInputProps;
  repeatPasswordInputComponent: TextInputProps;
  buttonComponent: ButtonProps
}
