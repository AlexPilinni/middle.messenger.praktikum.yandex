import {Props} from "../../core/types";
import {Errors} from "../../components/errors/errors";

export interface ClientErrorsProps extends Props {
  errorsComponent?: Errors;
}
