import {ClientErrorsProps} from "../../pages/404/types";
import {Errors} from "../../components/errors/errors";

export const CLIENT_ERRORS_INITIAL_STATE: ClientErrorsProps = {
  errorsComponent: new Errors({
    className: 'client-error-page',
    title: '404',
    message: 'Что-то пошло не так..'
  }),
}
