import {Children, Props} from '../../core/types';
import {HandleFormService} from "../../services/handle-form-servise";
import {SearchInput} from "../../components/search-input/search-input";
import {Link} from "../../components/link/link";
import {Card} from "../../components/card/card";
import {Chat, ChatProps} from "../../components/chat/chat";
import {resizeTextArea} from "./utils";

export interface MessengerPageProps extends Props {
  children?: Children;
}

class MessengerService {
  protected handleFormService: HandleFormService
  public props: MessengerPageProps
  constructor() {
    this.handleFormService = new HandleFormService()
    this.props = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): MessengerPageProps {

  return {
    children: {
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
          {id: "3",name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
          {id: "4",name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"},
          {id: "5",name: 'Алексей', time: "10:20", message: "Го гулять", counter: "3"}
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
    },
    events: {
      input: [
        {
          id: 'message',
          fn: e => {
            resizeTextArea(e.currentTarget as HTMLInputElement)
          }
        }
      ],
      keydown: [
        {
          id: 'message',
          fn: event => {
            if((event as KeyboardEvent).keyCode == 13){
              event.preventDefault();
              const form = document.getElementById('messenger-form');
              const button = (form as HTMLFormElement).querySelector('[type=submit]');
              (button as HTMLFormElement).click()
            }
          }
        }
      ],
      click: [
        {
          id: 'contact-list',
          fn: (event) => {
            console.log((event.currentTarget as HTMLElement).querySelector(':focus'));
            // (document.querySelector('.messenger__main') as HTMLElement).compileTemplateToElement(asd, asd)
            // (document.querySelector('.messenger__main') as HTMLElement).innerHTML = `${new Chat({
            //   id: '2'
            // })}`
            // mainUser = combo2
          }
        },
      ],
      submit: [
        {
          id: 'messenger-form',
          fn: handleFormService.handleFormSubmit
        }
      ],
    }
  }
}

const messengerService = new MessengerService();

export const {props} = messengerService;
