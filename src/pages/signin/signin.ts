import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './signin.pug';
import {SigninPageProps, props} from './signin.service';
import './signin.scss'
class SigninPage extends Block<SigninPageProps> {
  constructor(propsObj: SigninPageProps) {
    super('main', 'SigninPage', propsObj);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new SigninPage(props);
