import {Props} from "../../core/types";
import {SearchInput} from "../../components/search-input/search-input";
import {Link} from "../../components/link/link";
import {Card} from "../../components/card/card";
import {Chat} from "../../components/chat/chat";

export interface MessengerPageProps extends Props {
  searchInputComponent?: SearchInput;
  linkComponent?: Link;
  cardsComponent?: Card;
  chat?: Chat;
}
