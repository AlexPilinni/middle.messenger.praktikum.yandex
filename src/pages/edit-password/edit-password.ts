import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './edit-password.pug';
import './edit-password.scss'
import {EditPasswordPageProps, props} from './edit-password.service';

class EditPasswordPage extends Block {
  constructor(props: EditPasswordPageProps) {
    super('main', 'EditPassword', props);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new EditPasswordPage(props);
