import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './button.pug';
import './button.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

interface ButtonProps extends Props {
  type?: string;
  className?: string;
  text: string;
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps, eventName: string, events?: Events) {
    super('button', 'Button', props, events);
    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'button');
    this._element.setAttribute('type', this.props.type as string)
  }


  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
