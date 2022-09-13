import {Block} from "../../../core/block";
import {Events, Props} from "../../../core/types";
import {mapStateToPropsCallBack} from "../../../store/utils";
import {compileTemplateToElement} from "../../../core/utils/compile-template";
import {TextInputProps} from "../../text-input/text-input";
import './popup-create-chat.scss';
import {ButtonProps} from "../../button/button";
const templatePug = require('./popup-create-chat.pug');

export interface PopupCreateChatProps extends Props {
  isOpened: boolean;
  defaultChatAvatarSrc: string;
  chatAvatarSrc: string | null;
  nameChatInput: TextInputProps;
  createChatButton: ButtonProps;
}

export class PopupCreateChat extends Block<PopupCreateChatProps> {
  constructor(propsObj: PopupCreateChatProps, eventName: string, events?: Events) {
    super('div', 'popupCreateChat', propsObj, events);

    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'popupCreateChat', this._meta.events);
  }
}
