import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './messages.pug';
import './messages.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";


export interface MessagesListProps extends Props {
  user: undefined | {
    id: string;
    name: string;
    list: [
      {
        date: string;
        history: Array<{time: string, author: string, message: string}>
      }
    ]
  },
  className?: string;
}

export class MessagesList extends Block<MessagesListProps> {

  constructor(props: MessagesListProps, eventName: string, events?: Events) {
    super('ul', 'Messages', props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'messages-list');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
