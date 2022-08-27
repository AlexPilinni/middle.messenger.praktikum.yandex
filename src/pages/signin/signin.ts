import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
import templatePug from './signin.pug';
import './signin.scss';
import {SignInPageProps} from "./types";
import {SIGNIN_INITIAL_STATE} from "../../store/initialState/signin-initial-state";
import {signInEvents} from "./signin.service";
import {Events} from "../../core/types";

export class SignInPage extends Block<SignInPageProps> {
  constructor(objProps: SignInPageProps = SIGNIN_INITIAL_STATE, events:Events = signInEvents,  rootId?: string) {
    super('main', 'SignInPage', objProps, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props,'SignInPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}


