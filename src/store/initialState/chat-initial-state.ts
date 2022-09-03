import {ChatPageProps} from "../../pages/chat/types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vertEllipsisImg from '../../../static/images/vert-ellipsis.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cartImg from '../../../static/images/cart.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import defaultAvatar from '../../../static/images/avatar.svg';

export const CHAT_INITIAL_STATE: ChatPageProps = {
  chatName: '',
  settingsImgSrc: '../../../static/images/dopicons/settings.svg',
  vertEllipsisImgSrc: vertEllipsisImg as string,
  cartImgSrc: cartImg as string,
  selectedChat: null,
  chatsList: {
    chats: []
  },
  linkComponent: {
    className: 'sidebar',
    href: '/profile'
  },
  search: {
    id: 'search',
    name: 'search',
    placeholder: 'Search',
  },
  chatAvatar: {
    avatarImgSrc: null,
    size: '36px',
  },
  time: null,
  messagesList: {
    messages: [],
  },
  ellipsisMenu: {
    isOpened: false,
  },
  popupCreateChat: {
    isOpened: false,
    defaultChatAvatarSrc: defaultAvatar as string,
    chatAvatarSrc: null,
    nameChatInput: {
      label: 'Название чата',
      id: 'chat_name',
      name: 'chat_name'
    },
    createChatButton: {
      type: 'submit',
      text: 'Создать новый чат',
    },
  },
  popupAddUserToChat: {
    isOpened: false,
    searchUserInput: {
      id: 'user_login',
      name: 'user_login',
      placeholder: 'Найти по логину',
      autofocusOn: true
    },
    usersList: {
      users: []
    }
  },
  popupDeleteUserFromChat: {
    isOpened: false,
    usersList: {
      users: []
    }
  },
}
