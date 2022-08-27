import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './chat.pug';
import './chat.scss';
import {toKebab} from "../../utils";

interface ChatProps extends Props {
  className: string,
  user: undefined | {
    id: string;
    name: string;
    list: [
      {
        date: string;
        history: Array<{time: string, author: string, message: string}>
      }
    ]
  }
}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', 'Chat', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'chat');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
