import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './signin.pug';
import {SigninPageProps, props} from './signin.service';
import './signin.scss'

export class SigninPage extends Block<SigninPageProps> {
  constructor(propsObj: SigninPageProps = props, rootId?: string) {
    super('main', 'SigninPage', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

// new SigninPage(props);
