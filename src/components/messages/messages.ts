import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './messages.pug';
import './messages.scss';
import {toKebab} from "../../utils";


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

  constructor(propsObj: MessagesListProps) {
    super('ul', 'Messages', propsObj);
    console.log(propsObj)
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'messages-list');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}