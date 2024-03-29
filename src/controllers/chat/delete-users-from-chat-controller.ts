import {Options, ResponseType} from "../../services/http-service";
import {ErrorResponse} from "../../api/types";
import store from "../../store/store";
import {DeleteUsersFromChatAPI} from "../../api/chat/delete-users-api";
import {getPathFromArray} from "../../core/utils/get-path-from-array";
import {getEventName} from "../../core/utils/get-event-name";
import {UsersListProps} from "../../components/found-users/users-list";
import {GetChatsController} from "./get-chats-controller";
import {FoundUserProps} from "../../components/found-user/types";

type DeleteUsersFromChatFormModel = {
  users: number[];
  chatId: number;
}

const deleteUsersFromChatAPI = new DeleteUsersFromChatAPI();

export class DeleteUsersFromChatController {
  static async delete(data: DeleteUsersFromChatFormModel): Promise<void> {
    try {
      deleteUsersFromChatAPI.delete(prepareDataToRequest(data))
        .then((response: ErrorResponse | null) => {
          if (response) {
            throw new Error(response.reason);
          }

          store.set(
            getPathFromArray(['popupDeleteUserFromChat', 'usersList']),
            prepareDataToStore(data.users),
            getEventName('popupDeleteUserFromChat', 'usersList')
          );
        })
        .catch((error) => {
          console.error(error, data);
        })
    } catch (error) {
      console.error(error, data);
    }
  }
}

function prepareDataToRequest(data: DeleteUsersFromChatFormModel): Options {
  return {
    withCredentials: true,
    responseType: ResponseType.json,
    headers: {
      'content-type': 'application/json',
    },
    data: data,
  }
}

function prepareDataToStore(usersIds: number[]): UsersListProps {
  const state = store.getState();

  const deleteUsersFromList = (usersList: FoundUserProps[]) => {
    const newUsersList = usersList.filter(user => !usersIds.includes(user.id))

    if (!newUsersList.length) {
      GetChatsController.get();
    }

    return newUsersList;
  }

  return {
    ...state.chatPage.popupDeleteUserFromChat.usersList,
    users: deleteUsersFromList(state.chatPage.popupDeleteUserFromChat.usersList.users),
  }
}
