import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './search-input.pug';
import './search-input.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

interface SearchInputProps extends Props {
  id: string;
  label?: string;
  type: string;
  clasName?: string;
}

export class SearchInput extends Block<SearchInputProps> {
  constructor(props: SearchInputProps, eventName: string, events?: Events) {
    super('form', 'SearchInput', props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'search-input');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
