import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './500.pug';
import './500.scss'
import {Errors} from "../../components/errors/errors";

const props: Props = {
  children: {
    errorsComponent: new Errors({
      className: 'server-error-page',
      title: '500',
      message: 'Мы уже фиксим.'
    }),
  },
};

class ServerErrorPage extends Block<Props> {
  constructor(props: Props) {
    super('main', 'ServerErrorPage', props);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new ServerErrorPage(props);
