import {Events} from "../../core/types";


export class ClientErrorsService {
  clientErrorsEvents: Events
  constructor() {
    this.clientErrorsEvents = {}
  }
}

const clientErrorsService = new ClientErrorsService()

export const {clientErrorsEvents} = clientErrorsService
