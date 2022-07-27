import {Block} from './core/block';
import {Props} from './core/types';
import {compileTemplateToElement} from './core/utils';
import templatePug from './main.pug';
import {LinkList} from './components/link-list/link-list';
import './main.scss'

interface MainPageProps extends Props {
  title: string;
}

const props: MainPageProps = {
  title: 'Навигация',
  children: {
    linkListComponent: new LinkList({
      className: 'main-page',
      items: [
        {
          href: '/src/pages/login/index.html',
          value: 'Login',
        },
        {
          href: '/src/pages/signin/index.html',
          value: 'Signin',
        },
        {
          href: '/src/pages/profile/index.html',
          value: 'Profile',
        },
        {
          href: '/src/pages/edit-profile/index.html',
          value: 'Edit Profile',
        },
        {
          href: '/src/pages/edit-password/index.html',
          value: 'Edit Password',
        },
        {
          href: '/src/pages/messenger/index.html',
          value: 'Messenger',
        },
        {
          href: '/src/pages/404/index.html',
          value: '404',
        },
        {
          href: '/src/pages/500/index.html',
          value: '500',
        },
      ],
    }),
  },
};

class MainPage extends Block<MainPageProps> {
  constructor(propsObj: MainPageProps) {
    super('main', 'MainPage', propsObj);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById('app');

    root?.appendChild(this.getContent());
  }
}

new MainPage(props);
