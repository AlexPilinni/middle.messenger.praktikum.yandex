import {Block} from '../../core/block';
import {compileTemplateToElement} from "../../core/utils/compile-template";
import templatePug from './chat.pug';
import './chat.scss';
import {ChatPageProps} from "./types";
import {CHAT_INITIAL_STATE} from "../../store/initialState/chat-initial-state";
import {Events} from "../../core/types";
import {chatEvents} from "./chat-service";
import {mapStateToPropsCallBack} from "../../store/utils";
import {GetChatsController} from "../../controllers/chat/get-chats-controller";
import {webSocketController} from "../../controllers/websocket/websocket-controller";


export class ChatPage extends Block<ChatPageProps> {
	constructor(propsObj: ChatPageProps = CHAT_INITIAL_STATE, events: Events = chatEvents, rootId?: string) {
		super('main', 'chatPageBlock', propsObj, events, rootId);

    this.subscribeToStoreEvent('ChatPage', mapStateToPropsCallBack);

    GetChatsController.get();
  }

	render() {
		return compileTemplateToElement(templatePug, this.props, 'ChatPage', this._meta.events);
	}

	componentDidMount() {
		const root = document.getElementById(this._meta.rootId || 'app');

		root?.appendChild(this.getContent());
	}

  destroy(): void {
    if (webSocketController.isStarted) {
      webSocketController.closeConnection();
    }
    super.destroy();
  }
}
