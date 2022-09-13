import {Block} from '../../core/block';
import {Events, Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./500.pug');
import './500.scss'
import {serverErrorsEvents} from "./500.service";
import {SERVER_ERRORS_INITIAL_STATE} from "../../store/initialState/server-errors-initial-state";

export class ServerErrorPage extends Block<Props> {
  constructor(propsObj: Props=SERVER_ERRORS_INITIAL_STATE, events: Events=serverErrorsEvents, rootId?: string) {
    super('main', 'ServerErrorPage', propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'ServerErrorPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}

