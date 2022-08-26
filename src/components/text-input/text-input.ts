import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './text-input.pug';
import './text-input.scss';
import {toKebab} from "../../utils";

interface TextInputProps extends Props {
  id: string;
  label?: string;
  type: string;
  className?: string;
  initialValue?: string;
}

export class TextInput extends Block<TextInputProps> {
  constructor(props: TextInputProps) {
    super('div', 'TextInput', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'text-input');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
