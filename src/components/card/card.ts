import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './card.pug';
import './card.scss';
import {toKebab} from "../../utils";

interface CardProps extends Props {
  users: Array<{id: string, name: string, time: string, message: string, counter: string}>
}

export class Card extends Block<CardProps> {
  constructor(propsObj: CardProps) {
    super('ul', 'Cards', propsObj);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'cards');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
