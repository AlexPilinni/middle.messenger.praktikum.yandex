import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './edit-profile.pug';
import './edit-profile.scss'
import {EditProfilePageProps, props} from './edit-profile.service';

export class EditProfilePage extends Block<EditProfilePageProps> {
  constructor(propsObj: EditProfilePageProps=props, rootId?: string) {
    super('main', 'EditProfile', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

