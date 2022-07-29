import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './login.pug';
import {LoginPageProps, props} from './login.service';

class LoginPage extends Block<LoginPageProps> {
  constructor(propsObj: LoginPageProps) {
    super('main', 'LoginPage', propsObj);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new LoginPage(props);

