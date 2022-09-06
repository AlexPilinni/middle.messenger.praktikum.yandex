import {ServerErrorsProps} from "../../pages/500/types";

export const SERVER_ERRORS_INITIAL_STATE: ServerErrorsProps = {
  errorsComponent: {
    className: 'server-error-page',
    title: '500',
    message: 'Мы уже фиксим.'
  },
}
