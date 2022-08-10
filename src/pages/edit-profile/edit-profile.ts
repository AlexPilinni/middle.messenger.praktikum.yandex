import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './edit-profile.pug';
import './edit-profile.scss'
import {EditProfilePageProps, props} from './edit-profile.service';

class EditProfilePage extends Block {
  constructor(props: EditProfilePageProps) {
    super('main', 'EditProfile', props);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new EditProfilePage(props);
