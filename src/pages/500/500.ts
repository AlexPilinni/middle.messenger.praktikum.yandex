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

export  class ServerErrorPage extends Block<Props> {
  constructor(propsObj: Props=props, rootId?: string) {
    super('main', 'ServerErrorPage', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

