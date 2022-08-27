import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './messenger.pug';
import './messenger.scss';
import {MessengerPageProps} from "./types";
import {MESSENGER_INITIAL_STATE} from "../../store/initialState/messenger-initial-state";
import {Events} from "../../core/types";
import {messengerEvents} from "./messenger.service";


export class MessengerPage extends Block<MessengerPageProps> {
  constructor(propsObj: MessengerPageProps = MESSENGER_INITIAL_STATE, events:Events = messengerEvents, rootId?: string) {
    super('main', 'Messenger', propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'MessengerPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}

