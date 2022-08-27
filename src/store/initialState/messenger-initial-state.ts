import {MessengerPageProps} from "../../pages/messenger/types";

export const MESSENGER_INITIAL_STATE: MessengerPageProps = {
  searchInputComponent: {
    className: 'messenger',
    label: 'Поиск',
    id: 'search',
    type: 'text',
  },
  linkComponent: {
    className: 'messenger',
    href: '../profile/index.html'
  },
  cardsComponent: {
    className: 'messenger',
    users: [
      {id: "1", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "2", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "3", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "4", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
      {id: "5", name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"}
    ]
  },
  chatComponent: {
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
  }
}