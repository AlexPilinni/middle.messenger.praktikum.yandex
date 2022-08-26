import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './login.pug';
import {LoginPageProps, props} from './login.service';
import './login.scss';

export class LoginPage extends Block<LoginPageProps> {
  constructor(objProps: LoginPageProps = props, rootId?: string) {
    super('main', 'LoginPage', objProps, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

// new LoginPage(props);

