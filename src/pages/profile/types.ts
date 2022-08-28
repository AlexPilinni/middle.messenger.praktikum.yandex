import {Props} from "../../core/types";

export interface ProfilePageProps extends Props {
  user: {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
  };
}
