import {ServerErrorsProps} from "../../pages/500/types";
import {Errors} from "../../components/errors/errors";

export const SERVER_ERRORS_INITIAL_STATE: ServerErrorsProps = {
  errorsComponent: new Errors({
    className: 'server-error-page',
    title: '500',
    message: 'Мы уже фиксим.'
  }),
}
