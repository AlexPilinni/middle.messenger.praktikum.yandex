import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './errors.pug';
import './errors.scss';
import {toKebab} from "../../utils";

interface ErrorsProps extends Props {
  clasName?: string;
  title: string;
  message: string;
}

export class Errors extends Block<ErrorsProps> {
  constructor(props: ErrorsProps) {
    super('div', 'Errors', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'errors');
  }


  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
