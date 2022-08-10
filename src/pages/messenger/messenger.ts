import {Block} from '../../core/block';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './messenger.pug';
import './messenger.scss';
import {MessengerPageProps, props} from './messenger.service';


class MessengerPage extends Block<MessengerPageProps> {
  constructor(props: MessengerPageProps) {
    super('main', 'Messenger', props);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new MessengerPage(props);
