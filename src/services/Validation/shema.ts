import {hasNumbers, hasSymbols, isRequired, maxLength, minLength} from "./validators";

interface SchemaValidation {
  [key:string]: funcValidator | carryFuncValidator
}

export type funcValidator = Array<(value:string) => string | null>
export type carryFuncValidator = Array<(value:string) => (n:number) => string | null>

export const SCHEMA_VALIDATION:SchemaValidation = {
  password: [isRequired, minLength(2), maxLength(10), hasNumbers, hasSymbols],
  login: [isRequired, minLength(2), maxLength(10)],
}
