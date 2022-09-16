import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import {mapStateToPropsCallBack} from '../../store/utils';
const templatePug = require('./search-user-input.pug');
import './search-user-input.scss';

export interface SearchUserInputProps extends Props {
	id: string;
	name: string;
	label?: string;
	labelClass?: string;
	inputContainerClass?: string;
	inputClass?: string;
	placeholder?: string;
  autofocusOn?: boolean;
  autocomplete?: boolean
  value?: string;
}

export class SearchUserInput extends Block<SearchUserInputProps> {
	constructor(propsObj: SearchUserInputProps, eventName: string, events?: Events) {
		super('div', 'searchInputBlock', propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
	}

	render() {
		return compileTemplateToElement(templatePug, this.props, '', this._meta.events);
	}
}
