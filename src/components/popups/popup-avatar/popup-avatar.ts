import {Block} from "../../../core/block";
import {Events, Props} from "../../../core/types";
import {mapStateToPropsCallBack} from "../../../store/utils";
import {compileTemplateToElement} from "../../../core/utils/compile-template";
import {ButtonProps} from "../../button/button";
import './popup-avatar.scss';
const templatePug = require('./popup-avatar.pug');

export interface PopupAvatarProps extends Props {
  isOpened: boolean;
  defaultImgSrc: string;
  avatarImgSrc: string | null;
  avatarBlobImgSrc: string | null;
  changeAvatarButton: ButtonProps;
}

export class PopupAvatar extends Block<PopupAvatarProps> {
  constructor(propsObj: PopupAvatarProps, eventName: string, events?: Events) {
    super('div', 'popupAvatar', propsObj, events);
    this.subscribeToStoreEvent(eventName, mapStateToPropsCallBack);
  }

  render() {
    return compileTemplateToElement(templatePug, this.props, 'popupAvatar', this._meta.events);
  }
}
