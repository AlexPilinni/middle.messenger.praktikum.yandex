import {Props} from "../../core/types";
import {SearchUserInputProps} from "../../components/search-user/search-user-input";
import {AvatarProps} from "../../components/avatar/avatar";
import {ChatCardProps} from "../../components/chat-card/chat-card";
import {PopupCreateChatProps} from "../../components/popups/popup-create-chat/popup-create-chat";
import {TimeProps} from "../../components/time/types";
import {EllipsisMenuProps} from "../../components/menus/ellipsis-menu/ellipsis-menu";
import {PopupAddUserProps} from "../../components/popups/popup-add-user/popup-add-user";
import {PopupDeleteUserProps} from "../../components/popups/popup-delete-user/popup-delete-user";
import {ChatsListProps} from "../../components/chat-list/chats-list";
import {MessagesListProps} from "../../components/messages-list/messages-list";
import {LinkProps} from "../../components/link/link";

export interface ChatPageProps extends Props {
  chatName?: string | null;
  messageFieldName?: string;
  settingsImgSrc?: string | null;
  vertEllipsisImgSrc?: string | null;
  linkComponent?: LinkProps;
  cartImgSrc?: string | null;
  selectedChat: ChatCardProps | null;
  chatsList: ChatsListProps;
  error?: string,
  search?: SearchUserInputProps,
  chatAvatar?: AvatarProps,
  time: TimeProps | null,
  messagesList: MessagesListProps,
  ellipsisMenu: EllipsisMenuProps,
  popupCreateChat: PopupCreateChatProps,
  popupAddUserToChat: PopupAddUserProps,
  popupDeleteUserFromChat: PopupDeleteUserProps,
}
