import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './search-input.pug';
import './search-input.scss';
import {toKebab} from "../../utils";

interface SearchInputProps extends Props {
  id: string;
  label?: string;
  type: string;
  clasName?: string;
}

export class SearchInput extends Block<SearchInputProps> {
  constructor(propsObj: SearchInputProps) {
    super('form', 'SearchInput', propsObj);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'search-input');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
