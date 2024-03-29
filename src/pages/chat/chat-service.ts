import {router} from "../../index";
import {Events} from "../../core/types";
import store from "../../store/store";
import {getPathFromArray} from "../../core/utils/get-path-from-array";
import {getEventName} from "../../core/utils/get-event-name";
import {CreateChatController} from "../../controllers/chat/create-chat-controller";
import {ChatCardProps} from "../../components/chat-card/chat-card";
import {debounce, getAvatarLink} from "../../utils";
import {GetUsersController} from "../../controllers/chat/get-users-controller";
import {AddUsersToChatController} from "../../controllers/chat/add-users-to-chat-controller";
import {GetUsersByChatIdController} from "../../controllers/chat/get-users-by-chat-id-controller";
import {DeleteUsersFromChatController} from "../../controllers/chat/delete-users-from-chat-controller";
import {GetChatTokenController} from "../../controllers/chat/get-chat-token-controller";
import {
  UserIdAndAvatarController,
  UserIdAndAvatarRequest
} from "../../controllers/profile/get-user-id-controller";
import {TimeType} from "../../components/time/types";
import {MessageProps} from "../../components/message/message";
import {UserInfoByIdController} from "../../controllers/profile/get-user-info-by-id-controller";
import {UserInfoByIdResponse} from "../../api/profile/get-user-info-by-id-api";
import {webSocketController} from "../../controllers/websocket/websocket-controller";
import {FoundUserProps} from "../../components/found-user/types";
import {HandleFormService} from "../../services/handle-form-servise";
const CHAT_PAGE_EVENT_NAME = 'ChatPage'

class ChatHandleService {
  protected handleFormService: HandleFormService
  public chatEvents: Events

  constructor() {
    this.handleFormService = new HandleFormService()
    this.chatEvents = getProps(this.handleFormService)
  }
}

function getProps(handleFormService: HandleFormService): Events {
  return {
    click: [
      {
        id: 'goToSettings',
        fn: event => {
          event.preventDefault();
          router.go('/profile');
        },
      },
      {
        id: 'openCreateChatPopup',
        fn: event => {
          event.preventDefault();

          store.set(
            getPathFromArray(['chatPage', 'popupCreateChat']),
            {
              ...store.getState().chatPage.popupCreateChat,
              isOpened: true,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupCreateChat')
          );
        },
      },
      {
        id: 'popupCreateChat',
        fn: event => {
          const backgroundPopup = (event.target as HTMLElement).getAttribute('id');

          if (backgroundPopup !== 'popupCreateChat') {
            return;
          }

          store.set(
            getPathFromArray(['chatPage', 'popupCreateChat']),
            {
              ...store.getState().chatPage.popupCreateChat,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupCreateChat')
          );
        },
      },
      {
        id: 'closeCreateChatPopup',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'popupCreateChat']),
            {
              ...store.getState().chatPage.popupCreateChat,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupCreateChat')
          );
        },
      },
      {
        id: 'chatCards',
        fn: event => {
          const chatCardElement = (event.target as HTMLElement).closest('.chat-card');

          if (!chatCardElement) {
            return;
          }

          const chats = store.getState().chatPage.chatsList.chats;

          const selectedChat= chats.find((chat: ChatCardProps) => chat.id === Number(chatCardElement.id));

          if (selectedChat) {
            GetChatTokenController.get(Number(chatCardElement.id)).then((token: string) => {
              UserIdAndAvatarController.getIdAndAvatar()
                .then((user: UserIdAndAvatarRequest) => {

                  if (webSocketController.isStarted) {
                    webSocketController.closeConnection();
                  }

                  startChat(user, selectedChat, token);
                })
                .catch(error => {
                  console.error(error);
                })
            });
          }
        },
      },
      {
        id: 'vertical-ellipsis',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'ellipsisMenu']),
            {
              ...store.getState().chatPage.ellipsisMenu,
              isOpened: true,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'ellipsisMenu')
          );
        },
      },
      {
        id: 'closeEllipsisMenu',
        fn: event => {
          const idClickedElement = (event.target as HTMLElement).getAttribute('id');

          if (idClickedElement !== 'closeEllipsisMenu') {
            return;
          }

          store.set(
            getPathFromArray(['chatPage', 'ellipsisMenu']),
            {
              ...store.getState().chatPage.ellipsisMenu,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'ellipsisMenu')
          );
        },
      },
      {
        id: 'addUser',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'ellipsisMenu']),
            {
              ...store.getState().chatPage.ellipsisMenu,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'ellipsisMenu')
          );

          store.set(
            getPathFromArray(['chatPage', 'popupAddUserToChat']),
            {
              ...store.getState().chatPage.popupAddUserToChat,
              isOpened: true
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupAddUserToChat')
          );
        },
      },
      {
        id: 'deleteUser',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'ellipsisMenu']),
            {
              ...store.getState().chatPage.ellipsisMenu,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'ellipsisMenu')
          );

          store.set(
            getPathFromArray(['chatPage', 'popupDeleteUserFromChat']),
            {
              ...store.getState().chatPage.popupDeleteUserFromChat,
              isOpened: true,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupDeleteUserFromChat')
          );

          const selectedChatId = store.getState().chatPage.selectedChat?.id as number;

          GetUsersByChatIdController.get(selectedChatId);
        },
      },
      {
        id: 'closePopupAddUserToChat',
        fn: event => {
          const idClickedElement = (event.target as HTMLElement).getAttribute('id');

          if (idClickedElement !== 'closePopupAddUserToChat') {
            return;
          }

          store.set(
            getPathFromArray(['chatPage', 'popupAddUserToChat']),
            {
              ...store.getState().chatPage.popupAddUserToChat,
              isOpened: false,
              usersList: {
                users: []
              },
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupAddUserToChat')
          );
        },
      },
      {
        id: 'closePopupDeleteUserFromChat',
        fn: event => {
          const idClickedElement = (event.target as HTMLElement).getAttribute('id');

          if (idClickedElement !== 'closePopupDeleteUserFromChat') {
            return;
          }

          store.set(
            getPathFromArray(['chatPage', 'popupDeleteUserFromChat']),
            {
              ...store.getState().chatPage.popupDeleteUserFromChat,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupDeleteUserFromChat')
          );
        },
      },
      {
        id: 'closeAddUserPopup',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'popupAddUserToChat']),
            {
              ...store.getState().chatPage.popupAddUserToChat,
              isOpened: false,
              searchUserInput: {
                ...store.getState().chatPage.popupAddUserToChat.searchUserInput,
                value: '',
              },
              usersList: {
                users: []
              },
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupAddUserToChat')
          );
        },
      },
      {
        id: 'closeDeleteUserPopup',
        fn: () => {
          store.set(
            getPathFromArray(['chatPage', 'popupDeleteUserFromChat']),
            {
              ...store.getState().chatPage.popupDeleteUserFromChat,
              isOpened: false,
            },
            getEventName(CHAT_PAGE_EVENT_NAME, 'popupDeleteUserFromChat')
          );
        },
      },
      {
        id: 'addUserToChat',
        fn: event => {
          const userItem = (event.target as HTMLElement).closest('.found-user-item');

          if (!userItem) {
            return;
          }

          const userItemId = userItem.getAttribute('id');

          const chatId = store.getState().chatPage.selectedChat?.id;

          if (!chatId) {
            return;
          }

          AddUsersToChatController.add({
            users: [Number(userItemId)],
            chatId: chatId,
          })
        },
      },
      {
        id: 'deleteUserFromChat',
        fn: event => {
          const userItem = (event.target as HTMLElement).closest('.found-user-item');

          if (!userItem) {
            return;
          }

          const userItemId = userItem.getAttribute('id');

          const chatId = store.getState().chatPage.selectedChat?.id;

          if (!chatId) {
            return;
          }

          DeleteUsersFromChatController.delete({
            users: [Number(userItemId)],
            chatId: chatId,
          })
        },
      },
    ],
    input: [
      {
        id: 'user_login',
        fn: debounce(handleSearchUsers, 500),
      }
    ],
    focus: [
      {
        id: 'message',
        fn: event => {
          handleFormService.handleFieldFocus(event);
        },
      },
    ],
    keydown: [
      {
        id: 'message',
        fn: (event: KeyboardEvent) => {
          if (!event.shiftKey && event.code === 'Enter') {
            event.preventDefault();

            const input = (event.target as HTMLInputElement);

            if (!input.value.trim()) {
              return;
            }

            webSocketController.send(input.value);

            input.value = '';
          }
        },
      },
    ],
    submit: [
      {
        id: 'formMessage',
        fn: event => {
          // event.preventDefault();
          // const isFormValid = this.validateFormItems(event, 'chat', CHAT_PAGE_EVENT_NAME);
          //
          // if (!isFormValid) {
          //   return;
          // }

          const formData = handleFormService.handleFormSubmit(event);

          if (!formData) {
            return;
          }

          webSocketController.send(formData.message);

          (event.target as HTMLInputElement).value = '';
        },
      },
      {
        id: 'formCreateChat',
        fn: event => {
          event.preventDefault();
          const formData = handleFormService.handleFormSubmit(event);
          console.log(formData)
          if (!formData) {
            return;
          }

          CreateChatController.create({
            title: formData.chat_name,
          });
        },
      },
    ],
  };
}

function handleSearchUsers(event: Event): void {
  const text = (event.target as HTMLInputElement).value.trim();

  if (!text) {
    return;
  }

  GetUsersController.get({login: text});
}

function startChat(currentUser: UserIdAndAvatarRequest, selectedChat: ChatCardProps, token: string): void {
  webSocketController.start(currentUser.id, selectedChat.id, token).then((isStarted: boolean) => {
    if (isStarted) {
      GetUsersByChatIdController.get(selectedChat.id).then(() => {
        webSocketController.getLastMessages((lastMessages) => {
          if (!lastMessages) {
            return;
          }

          const users = store.getState().chatPage.popupDeleteUserFromChat.usersList.users;

          const getAvatarFromSavedUsers = (userId: number) => {
            return users.find((user: FoundUserProps) => user.id === userId)?.avatar.avatarImgSrc ?? null;
          }

          const updatedLastMessages = lastMessages.map((lastMessage) => {
            return {
              you: currentUser.id === lastMessage.user_id,
              text: lastMessage.content,
              avatar: {
                avatarImgSrc: getAvatarFromSavedUsers(lastMessage.user_id),
                size: '36px'
              },
              time: {
                type: TimeType.Card,
                date: new Date(lastMessage.time),
              }
            }
          })

          const getActiveChats = (chats: ChatCardProps[]) => chats.map(chat => {
            if (chat.id === Number(selectedChat.id)) {
              return {
                ...chat,
                unreadMessageCount: 0,
                textMessage: updatedLastMessages[0]?.text,
                time: updatedLastMessages[0]?.time ?? null,
                active: true,
              }
            }

            return {
              ...chat,
              active: false,
            }
          })

          const chats = store.getState().chatPage.chatsList.chats;

          store.set(
            getPathFromArray(['chatPage']),
            {
              ...store.getState().chatPage,
              selectedChat: selectedChat,
              chatsList: {
                chats: getActiveChats(chats),
              },
              messagesList: {
                messages: updatedLastMessages.reverse(),
              },
              chatName: selectedChat.chatName,
              chatAvatar: {
                avatarImgSrc: selectedChat.avatar.avatarImgSrc,
                size: '36px',
              }
            },
            getEventName(CHAT_PAGE_EVENT_NAME)
          );

          subscribeToMessage(currentUser);
        });
      });
    }
  });
}

function subscribeToMessage(currentUser: UserIdAndAvatarRequest): void {
  webSocketController.subscribeToMessage((message) => {
    if (!message) {
      return;
    }

    UserInfoByIdController.getInfo(message.user_id).then((response: UserInfoByIdResponse) => {
      const messages = store.getState().chatPage.messagesList.messages as MessageProps[];

      const newMessage = {
        you: currentUser.id === response.id,
        text: message.content,
        avatar: {
          avatarImgSrc: getAvatarLink(response.avatar),
          size: '36px'
        },
        time: {
          type: TimeType.Card,
          date: new Date(),
        }
      }

      messages.push(newMessage);

      const chats = store.getState().chatPage.chatsList.chats;
      const selectedChatId = store.getState().chatPage.selectedChat?.id as number;

      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChatId) {
          return {
            ...chat,
            textMessage: newMessage.text,
            time: newMessage.time,
          }
        }

        return chat;
      })

      store.set(
        getPathFromArray(['chatPage', 'chatsList']),
        {
          ...store.getState().chatPage.chatsList,
          chats: updatedChats,
        },
        getEventName(CHAT_PAGE_EVENT_NAME, 'chatsList')
      );

      store.set(
        getPathFromArray(['chatPage', 'messagesList']),
        {
          ...store.getState().chatPage.messagesList,
          messages: messages,
        },
        getEventName(CHAT_PAGE_EVENT_NAME, 'messagesList')
      );
    })
  });
}

export const {chatEvents} = new ChatHandleService();
