import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './messenger.pug';
import './messenger.scss'
import {SearchInput} from "../../components/search-input/search-input";
import {Link} from "../../components/link/link";

const props: Props = {
  children: {
    searchInputComponent: new SearchInput({
      className: 'messenger',
      label: 'Поиск',
      id: 'search',
      type: 'text',
    }),
    linkComponent: new Link({
      className: 'messenger',
      href: '../profile/index.html'
    })
  },
};

class MessengerPage extends Block<Props> {
  constructor(propsObj: Props) {
    super('main', 'MessengerPage', propsObj);
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
