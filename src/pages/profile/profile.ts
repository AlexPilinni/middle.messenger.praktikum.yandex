import {Block} from '../../core/block';
import {Props} from '../../core/types';
import {compileTemplateToElement} from '../../core/utils';
import templatePug from './profile.pug';
import './profile.scss'
import {router} from "../../index";
import {UserLogOutController} from "../../controllers/auth/logout-controller";

interface ProfilePageProps extends Props {
  user: {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
  };
}

const props: ProfilePageProps = {
  user: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30'
  },
  children: {},
  events: {
    click: [
      {
        id: 'goToChat',
        fn: event => {
          event.preventDefault();
          router.go('/messenger');
        },
      },
      {
        id: 'goToLogin',
        fn: event => {
          event.preventDefault();
          UserLogOutController.logOut();
        },
      },
      {
        id: 'goToEditProfile',
        fn: event => {
          event.preventDefault();
          router.go('/edit-profile');
        },
      },
      {
        id: 'goToEditPassword',
        fn: event => {
          event.preventDefault();
          router.go('/edit-password');
        },
      },
    ],
  }
};

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(propsObj: ProfilePageProps=props, rootId?: string) {
    super('main', 'Profile', propsObj, rootId);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props);
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId);

    root?.appendChild(this.getContent());
  }
}

