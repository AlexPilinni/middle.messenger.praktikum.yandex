import {Props} from "../../core/types";
import {ErrorsProps} from "../../components/errors/errors";

export interface ClientErrorsProps extends Props {
  errorsComponent?: ErrorsProps;
}
