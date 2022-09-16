import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./link.pug');
import './link.scss';
import {toKebab} from "../../utils";
import {mapStateToPropsCallBack} from "../../store/utils";

export interface LinkProps extends Props {
  href: string;
  className?: string;
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps, eventName: string, events?: Events) {
    super('a', 'Link', props, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'link');
  }

  _addComponentNameAttribute() {
    super._addComponentNameAttribute();
    this._element.setAttribute('href', `${this.props.href}`);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
  }
}
