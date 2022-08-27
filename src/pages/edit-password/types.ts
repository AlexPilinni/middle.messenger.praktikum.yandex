import {Props} from "../../core/types";
import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";

export interface EditPasswordPageProps extends Props {
  user: {
    display_name: 'Иван',
  },
  passwordInputComponent?: TextInput;
  repeatPasswordInputComponent?: TextInput;
  newPasswordInputComponent?: TextInput;
  buttonComponent?: Button;

}
