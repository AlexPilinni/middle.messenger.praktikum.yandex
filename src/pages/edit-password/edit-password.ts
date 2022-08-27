import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './edit-password.pug';
import './edit-password.scss'
import {EditPasswordPageProps, props} from './edit-password.service';

export class EditPasswordPage extends Block<EditPasswordPageProps> {
  constructor(propsObj: EditPasswordPageProps=props, rootId?: string) {
    super('main', 'EditPassword', propsObj,rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

