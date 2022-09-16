import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import {mapStateToPropsCallBack} from '../../store/utils';
const templatePug = require('./messages-list.pug');
import {MessageProps} from "../message/message";
import './messages-list.scss';

export interface MessagesListProps extends Props {
	messages: MessageProps[] | [];
}

export class MessagesList extends Block<MessagesListProps> {
	constructor(propsObj: MessagesListProps, eventName: string, events?: Events) {
		super('div', 'messagesList', propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
	}

	render() {
		return compileTemplateToElement(templatePug, this.props, 'messagesList', this._meta.events);
	}

  componentDidMount() {
    setTimeout(scrollBottom, 0);
  }
}

function scrollBottom(): void {
  const chatsContainerElement = document.querySelector('.chat') as HTMLElement;

  if (!chatsContainerElement) {
    return;
  }

  chatsContainerElement.scrollTop = chatsContainerElement.scrollHeight;
}
