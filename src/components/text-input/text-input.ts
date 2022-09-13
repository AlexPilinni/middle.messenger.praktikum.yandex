import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./text-input.pug');
import './text-input.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

export interface TextInputProps extends Props {
  id: string;
  label?: string;
  type?: string;
  className?: string;
  initialValue?: string;
}

export class TextInput extends Block<TextInputProps> {
  constructor(props: TextInputProps, eventName: string, events?: Events) {
    super('div', 'TextInput', props, events);
    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'text-input');
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
