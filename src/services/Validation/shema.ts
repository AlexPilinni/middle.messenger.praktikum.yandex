import {
  hasNumbers,
  hasSymbols,
  isRequired,
  maxLength,
  minLength,
  isRecommendedCharacters,
  isLoginApprove, isEmailApprove, isPhoneApprove, hasLength
} from "./validators";

interface SchemaValidation {
  [key:string]: funcValidator | carryFuncValidator
}

export type funcValidator = Array<(value:string) => string | null>
export type carryFuncValidator = Array<(value:string) => (n:number) => string | null>

export const SCHEMA_VALIDATION:SchemaValidation = {
  'password': [isRequired, minLength(8), maxLength(40), hasNumbers, hasSymbols],
  'repeat-password': [isRequired, minLength(8), maxLength(40), hasNumbers, hasSymbols],
  'new-password': [isRequired, minLength(8), maxLength(40), hasNumbers, hasSymbols],
  'login': [isRequired, minLength(3), maxLength(20), isLoginApprove],
  'email': [isRequired, minLength(3), maxLength(20), isEmailApprove],
  'first_name': [isRequired, minLength(2), maxLength(10), isRecommendedCharacters],
  'second_name': [isRequired, minLength(2), maxLength(10), isRecommendedCharacters],
  'display_name': [isRequired, minLength(2), maxLength(10), isRecommendedCharacters],
  'chat_name': [isRequired, minLength(2), maxLength(20)],
  'chat_avatar': [],
  'phone': [isRequired, isPhoneApprove],
  'message': [hasLength]
}
