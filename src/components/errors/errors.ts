import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './errors.pug';
import './errors.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

interface ErrorsProps extends Props {
  clasName?: string;
  title: string;
  message: string;
}

export class Errors extends Block<ErrorsProps> {
  constructor(props: ErrorsProps, eventName: string, events?: Events) {
    super('div', 'Errors', props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'errors');
  }


  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
