import {Events} from "../../core/types";
import {router} from "../../index";
import {UserLogOutController} from "../../controllers/auth/logout-controller";


export class ProfileService {
  public profileEvents: Events
  constructor() {
    this.profileEvents = {
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
    };
  }
}

const profileService = new ProfileService();

export const {profileEvents} = profileService;
