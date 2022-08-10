import {Block} from '../../core/block';
import {Props, User} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './card.pug';
import './card.scss';
import {toKebab} from "../../utils";

interface CardProps extends Props {
  users: Array<User>
}

export class Card extends Block<CardProps> {
  constructor(props: CardProps) {
    super('ul', 'Cards', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'cards');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
