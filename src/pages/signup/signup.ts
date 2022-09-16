import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils/compile-template';
const templatePug = require('./signup.pug');
import './signup.scss'
import {SignUpPageProps} from "./types";
import {SIGNUP_INITIAL_STATE} from "../../store/initialState/signup-initial-state";
import {Events} from "../../core/types";
import {signUpEvents} from "./signup.service";

export class SignUpPage extends Block<SignUpPageProps> {
  constructor(propsObj: SignUpPageProps = SIGNUP_INITIAL_STATE, events: Events = signUpEvents, rootId?: string) {
    super('main', 'SignUpPage', propsObj, events, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'SignUpPage', this._meta.events);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || 'app');

    root?.appendChild(this.getContent());
  }
}
