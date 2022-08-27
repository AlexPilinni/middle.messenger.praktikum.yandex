import {Props} from "../../core/types";
import {TextInputProps} from "../../components/text-input/text-input";
import {ButtonProps} from "../../components/button/button";

export interface EditPasswordPageProps extends Props {
  user: {
    display_name: 'Иван',
  },
  passwordInputComponent?: TextInputProps;
  repeatPasswordInputComponent?: TextInputProps;
  newPasswordInputComponent?: TextInputProps;
  buttonComponent?: ButtonProps;

}
