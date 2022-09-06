import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './edit-profile.pug';
import './edit-profile.scss'
import {editProfileEvents} from './edit-profile.service';
import {EditProfilePageProps} from "./types";
import {Events} from "../../core/types";
import {EDIT_PROFILE_INITIAL_STATE} from "../../store/initialState/edit-profile-initial-state";
import {mapStateToPropsCallBack} from "../../store/utils";
import {UserInfoForProfileController} from "../../controllers/profile/get-user-info-for-profile";

export class EditProfilePage extends Block<EditProfilePageProps> {
  constructor(propsObj: EditProfilePageProps = EDIT_PROFILE_INITIAL_STATE, events: Events = editProfileEvents, rootId?: string) {
    super('main', 'EditProfile', propsObj, events, rootId);

    this.subscribeToStoreEvent('EditProfilePage', mapStateToPropsCallBack);
    this.subscribeToStoreEvent('EditProfilePageInfo', mapStateToPropsCallBack);
    UserInfoForProfileController.getInfo()
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'EditProfilePage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}

