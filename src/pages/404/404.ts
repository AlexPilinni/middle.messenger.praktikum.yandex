import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './404.pug';
import './404.scss'
import {Errors} from "../../components/errors/errors";

const props: Props = {
  children: {
    errorsComponent: new Errors({
      className: 'client-error-page',
      title: '404',
      message: 'Что-то пошло не так..'
    }),
  },
};

class ClientErrorPage extends Block {
  constructor(props: Props) {
    super('main', 'ClientErrorPage', props);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new ClientErrorPage(props);
