import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./edit-password.pug');
import './edit-password.scss'
import {editPasswordEvents} from './edit-password.service';
import {EditPasswordPageProps} from "./types";
import {EDIT_PASSWORD_INITIAL_STATE} from "../../store/initialState/edit-password-initial-state";
import {Events} from "../../core/types";
import {mapStateToPropsCallBack} from "../../store/utils";

export class EditPasswordPage extends Block<EditPasswordPageProps> {
  constructor(propsObj: EditPasswordPageProps = EDIT_PASSWORD_INITIAL_STATE, events: Events = editPasswordEvents, rootId?: string) {
    super('main', 'EditPassword', propsObj, events, rootId);

    this.subscribeToStoreEvent('EditPasswordPage', mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'EditPasswordPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}

