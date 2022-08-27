import {ClientErrorsProps} from "../../pages/404/types";

export const CLIENT_ERRORS_INITIAL_STATE: ClientErrorsProps = {
  errorsComponent: {
    className: 'client-error-page',
    title: '404',
    message: 'Что-то пошло не так..'
  },
}
