import {Props} from "../../core/types";
import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";


export interface SignInPageProps extends Props {
  title: string;
  loginInputComponent?: TextInput,
  passwordInputComponent?: TextInput,
  buttonComponent?: Button
}
