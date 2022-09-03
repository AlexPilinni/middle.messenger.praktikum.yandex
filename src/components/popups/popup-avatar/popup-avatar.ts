import {Block} from "../../../core/block";
import {Events, Props} from "../../../core/types";
import {mapStateToPropsCallBack} from "../../../store/utils";
import {compileTemplateToElement} from "../../../core/utils/compile-template";
import templatePug from "./popup-avatar.pug";
import {FormButtonProps} from "../../dopcomponents/form-button/form-button";
import './popup-avatar.scss';


export interface PopupAvatarProps extends Props {
  isOpened: boolean;
  defaultImgSrc: string;
  avatarImgSrc: string | null;
  avatarBlobImgSrc: string | null;
  changeAvatarButton: FormButtonProps;
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
