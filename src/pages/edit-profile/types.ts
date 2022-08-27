import {Props} from "../../core/types";
import {TextInput} from "../../components/text-input/text-input";
import {Button} from "../../components/button/button";

export interface EditProfilePageProps extends Props {
  user: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
  },
  emailInputComponent?: TextInput;
  loginInputComponent?: TextInput;
  firstnameInputComponent?: TextInput;
  secondnameInputComponent?: TextInput;
  nicknameInputComponent?: TextInput;
  phoneInputComponent?: TextInput;
  buttonComponent?: Button;
}
