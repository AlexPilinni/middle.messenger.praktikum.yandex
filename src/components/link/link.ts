import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './link.pug';
import './link.scss';
import {toKebab} from "../../utils";

interface LinkProps extends Props {
  href: string;
  clasName?: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', 'Link', props);
  }

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'link');
  }

  _addComponentNameAttribute() {
    super._addComponentNameAttribute();
    this._element.setAttribute('href', `${this.props.href}`);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }
}
