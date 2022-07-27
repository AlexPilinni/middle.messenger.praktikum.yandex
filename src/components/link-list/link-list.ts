import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './link-list.pug';
import './link-list.scss';
import {toKebab} from "../../utils";

type Item = {
	href: string;
	value: string;
};

interface LinkListProps extends Props {
	items: Item[];
  className: string;
}

export class LinkList extends Block<LinkListProps> {

	constructor(propsObj: LinkListProps) {
		super('ul', 'List', propsObj);
	}

  _addComponentNameClass() {
    this._element.classList.add(`${this.props.className}__${toKebab(this.name)}`, 'list');
  }

	render() {
		return compileTemplateToElement(templatePug, this.props);
	}
}
