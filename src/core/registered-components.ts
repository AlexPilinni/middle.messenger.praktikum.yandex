import {TextInput} from "../components/text-input/text-input";
import {Button} from "../components/button/button";
import {Link} from "../components/link/link";
import {SearchInput} from "../components/search-input/search-input";
import {Errors} from "../components/errors/errors";
import {ChatCard} from "../components/chat-card/chat-card";
import {ChatsList} from "../components/chat-list/chats-list";
import {Time} from "../components/time/time";
import {Avatar} from "../components/avatar/avatar";
import {PopupAvatar} from "../components/popups/popup-avatar/popup-avatar";
import {EllipsisMenu} from "../components/menus/ellipsis-menu/ellipsis-menu";
import {Message} from "../components/message/message";
import {MessagesList} from '../components/messages-list/messages-list'
import {
  PopupCreateChat
} from "../components/popups/popup-create-chat/popup-create-chat";
import {FoundUser} from "../components/found-user/found-user";
import {PopupAddUser} from "../components/popups/popup-add-user/popup-add-user";
import {
  PopupDeleteUser
} from "../components/popups/popup-delete-user/popup-delete-user";
import {UsersList} from "../components/found-users/users-list";
import {SearchUserInput} from '../components/search-user/search-user-input';

export const REGISTERED_COMPONENTS = {
  textInputComponent: TextInput,
  emailInputComponent: TextInput,
  loginInputComponent: TextInput,
  firstnameInputComponent: TextInput,
  secondnameInputComponent: TextInput,
  phoneInputComponent: TextInput,
  passwordInputComponent: TextInput,
  repeatPasswordInputComponent: TextInput,
  newPasswordInputComponent: TextInput,
  nicknameInputComponent: TextInput,
  buttonComponent: Button,
  linkComponent: Link,
  errorsComponent: Errors,
  searchInputComponent: SearchInput,
  searchUserInputComponent: SearchUserInput,
  chatCardComponent: ChatCard,
  chatsListComponent: ChatsList,
  avatarComponent: Avatar,
  timeComponent: Time,
  messageComponent: Message,
  messagesListComponent: MessagesList,
  popupAvatarComponent: PopupAvatar,
  ellipsisMenu: EllipsisMenu,
  popupCreateChatComponent: PopupCreateChat,
  popupAddUserToChatComponent: PopupAddUser,
  popupDeleteUserFromChatComponent: PopupDeleteUser,
  foundUserComponent: FoundUser,
  usersListComponent: UsersList,
}
