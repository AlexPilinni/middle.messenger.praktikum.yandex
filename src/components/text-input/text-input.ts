import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './text-input.pug';
import './text-input.scss';
import {toKebab} from "../../utils";

interface TextInputProps extends Props {
  id: string;
  label: string;
  type: string;
  clasName?: string;
  required?: boolean;
  errorMessage?: string | null
}

export class TextInput extends Block<TextInputProps> {
  constructor(propsObj: TextInputProps) {
    super('div', 'TextInput', propsObj);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'text-input');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
