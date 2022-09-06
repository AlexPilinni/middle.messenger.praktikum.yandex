import {Events} from "../../core/types";

export class ServerErrorsService {
  serverErrorsEvents: Events
  constructor() {
    this.serverErrorsEvents = {}
  }
}

const serverErrorsService = new ServerErrorsService()

export const {serverErrorsEvents} = serverErrorsService
