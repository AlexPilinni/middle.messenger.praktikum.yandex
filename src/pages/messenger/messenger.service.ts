import {HandleFormService} from "../../services/handle-form-servise";
import {resizeTextArea} from "./utils";
import {Events} from "../../core/types";

class MessengerService {
  protected handleFormService: HandleFormService
  public messengerEvents: Events
  constructor() {
    this.handleFormService = new HandleFormService()
    this.messengerEvents = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): Events {

  return {
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

const messengerService = new MessengerService();

export const {messengerEvents} = messengerService;
