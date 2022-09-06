import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './404.pug';
import './404.scss'
import {clientErrorsEvents} from "./404.sevice";
import {CLIENT_ERRORS_INITIAL_STATE} from "../../store/initialState/client-errors-initial-state";

export class ClientErrorPage extends Block<Props> {
  constructor(propsObj: Props=CLIENT_ERRORS_INITIAL_STATE, events:Events = clientErrorsEvents, rootId?: string) {
    super('main', 'ClientErrorPage', propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'ClientErrorPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}

