import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './messenger.pug';
import './messenger.scss';
import {MessengerPageProps, props} from './messenger.service';


export class MessengerPage extends Block<MessengerPageProps> {
  constructor(propsObj: MessengerPageProps=props, rootId?: string) {
    super('main', 'Messenger', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

// new MessengerPage(props);
