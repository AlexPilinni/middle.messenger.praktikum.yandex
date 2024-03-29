import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import {mapStateToPropsCallBack} from '../../store/utils';
import templatePug from './found-user.pug';
import './found-user.scss';
import {FoundUserProps} from "./types";
import {Events} from "../../core/types";


export class FoundUser extends Block<FoundUserProps> {
	constructor(propsObj: FoundUserProps, eventName: string, events?: Events) {
		super('div', 'foundUser', propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
	}

	render() {
		return compileTemplateToElement(templatePug, this.props, 'foundUser', this._meta.events);
	}
}
