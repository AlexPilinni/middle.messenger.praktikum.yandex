import {Props} from "../../core/types";
import {Errors} from "../../components/errors/errors";

export interface ServerErrorsProps extends Props {
  errorsComponent?: Errors;
}
