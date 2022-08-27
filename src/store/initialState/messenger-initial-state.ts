import {MessengerPageProps} from "../../pages/messenger/types";
import {SearchInput} from "../../components/search-input/search-input";
import {Link} from "../../components/link/link";
import {Card} from "../../components/card/card";
import {Chat} from "../../components/chat/chat";

export const MESSENGER_INITIAL_STATE: MessengerPageProps = {
  searchInputComponent: new SearchInput({
    className: 'messenger',
    label: 'Поиск',
    id: 'search',
    type: 'text',
  }),
  linkComponent: new Link({
    className: 'messenger',
    href: '../profile/index.html'
  }),
  cardsComponent: new Card({
    className: 'messenger',
    users: [
      {id: "1", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "2", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "3", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "4", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "5", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"}
    ]
  }),
  chat: new Chat({
    className: 'messenger',
    user: {
      id: '999999',
      name: 'D Luffy',
      list: [
        {
          date: '12.23.23',
          history: [
            {time: '14.22', author: 'D Luffy', message: 'привет'},
            {time: '14.22', author: 'me', message: 'дарова'},
            {time: '14.23', author: 'D Luffy', message: 'как сам?'},
            {time: '14.23', author: 'me', message: 'как джип ниссан'},
          ]
        }
      ]
    }
  })
}
