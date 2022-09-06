import {Props} from "../../core/types";
import {ErrorsProps} from "../../components/errors/errors";

export interface ServerErrorsProps extends Props {
  errorsComponent?: ErrorsProps;
}
