import {Props} from "../../core/types";
import {TextInputProps} from "../../components/text-input/text-input";
import {ButtonProps} from "../../components/button/button";


export interface SignInPageProps extends Props {
  title: string;
  loginInputComponent?: TextInputProps,
  passwordInputComponent?: TextInputProps,
  buttonComponent?: ButtonProps
}
