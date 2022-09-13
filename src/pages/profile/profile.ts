import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./profile.pug');
import './profile.scss'
import {ProfilePageProps} from "./types";
import {PROFILE_INITIAL_STATE} from "../../store/initialState/profile-initial-state";
import {Events} from "../../core/types";
import {profileEvents} from "./profile.service";
import {mapStateToPropsCallBack} from "../../store/utils";
import {UserInfoController} from "../../controllers/profile/get-user-info-controller";

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(propsObj: ProfilePageProps=PROFILE_INITIAL_STATE, events: Events = profileEvents, rootId?: string) {
    super('main', 'Profile', propsObj, events, rootId);

    this.subscribeToStoreEvent('ProfilePage', mapStateToPropsCallBack);
    UserInfoController.getInfo()
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'ProfilePage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}
