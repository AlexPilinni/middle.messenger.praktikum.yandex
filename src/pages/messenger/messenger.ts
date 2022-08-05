import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './messenger.pug';
import './messenger.scss';
import {props} from './messenger.service';


class MessengerPage extends Block<Props> {
  constructor(propsObj: Props) {
    super('main', 'Messenger', propsObj);
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
