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

export class ClientErrorPage extends Block<Props> {
  constructor(propsObj: Props=props, rootId?: string) {
    super('main', 'ClientErrorPage', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

