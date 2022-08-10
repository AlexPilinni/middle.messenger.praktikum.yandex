import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './signin.pug';
import {SigninPageProps, props} from './signin.service';
import './signin.scss'
class SigninPage extends Block {
  constructor(props: SigninPageProps) {
    super('main', 'SigninPage', props);
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
