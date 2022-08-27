import {Block} from '../../core/block';
import {Events, Props, User} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './card.pug';
import './card.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

interface CardProps extends Props {
  users: Array<User>
}

export class Card extends Block<CardProps> {
  constructor(props: CardProps, eventName: string, events?: Events) {
    super('ul', 'Cards', props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'cards');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
