import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './button.pug';
import './button.scss';
import {toKebab} from "../../utils";

interface ButtonProps extends Props {
  type?: string;
  className?: string;
  text: string;
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', 'Button', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'button');
    this._element.setAttribute('type', this.props.type as string)
  }


  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
