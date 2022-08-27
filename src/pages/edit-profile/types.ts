import {Props} from "../../core/types";
import {TextInputProps} from "../../components/text-input/text-input";
import {ButtonProps} from "../../components/button/button";

export interface EditProfilePageProps extends Props {
  user: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
  },
  emailInputComponent?: TextInputProps;
  loginInputComponent?: TextInputProps;
  firstnameInputComponent?: TextInputProps;
  secondnameInputComponent?: TextInputProps;
  nicknameInputComponent?: TextInputProps;
  phoneInputComponent?: TextInputProps;
  buttonComponent?: ButtonProps;
}
