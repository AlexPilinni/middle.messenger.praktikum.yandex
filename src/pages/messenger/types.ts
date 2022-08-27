import {Props} from "../../core/types";
import {SearchInputProps} from "../../components/search-input/search-input";
import {LinkProps} from "../../components/link/link";
import {CardProps} from "../../components/card/card";
import {ChatProps} from "../../components/chat/chat";

export interface MessengerPageProps extends Props {
  searchInputComponent?: SearchInputProps;
  linkComponent?: LinkProps;
  cardsComponent?: CardProps;
  chatComponent?: ChatProps;
}
