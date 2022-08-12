export const isRequired: (value:string) => (null | string) = (value) => {
  if(value) {
    return null
  }
  return 'Поле должно быть заполнено'
}

export const minLength:(n: number) => (value:string) => (null | string) = (n) => {
  return function(value) {
    if(value.length >= n) {
      return null
    }
    return `Количество символом меньше ${n}`
  }
}

export const maxLength:(n: number) => (value:string) => (null | string) = (n) => {
  return function(value) {
    if (value.length <= n) {
      return null
    }
    return `Количество символом больше ${n}`
  }
}

export const hasNumbers: (value:string) => (null | string) = (value) => {
  if(/[0-9]/.test(value)) {
    return null
  }
  return `Нет наличия чисел`
}


export const hasSymbols: (value:string) => (null | string) = (value) => {
  if(/[!"№;%:?*(){}|\\\[\]<>]/.test(value)) {
    return null
  }
  return `Нет наличия символов`
}


export const isRecommendedCharacters: (value:string) => (null | string) = (value) => {
  if(/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value)) {
    return null
  }
  return `Только латиница или кирилица, первая буква- заглавная, возможен дефис, запрещены цифры, пробел и прочие символы`
}

export const isLoginApprove: (value:string) => (null | string) = (value) => {
  if(/^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(value)) {
    return null
  }
  return `Обязательно наличие латиницы, возможны цифры ,символы дефиса и нижнег оподчеркивания`
}


export const isEmailApprove: (value:string) => (null | string) = (value) => {
  if(/^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(value)) {
    return null
  }
  return `Только латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть @ и точка`
}

export const isPhoneApprove: (value:string) => (null | string) = (value) => {
  if(/^\+*[\d]{10,15}$/.test(value)) {
    return null
  }
  return `От 10 до 15 символов. состоит из цифр, может начинатьсяс +`
}
export const hasLength: (value:string) => (null | string) = (value) => {
  if(value.length > 0) {
    return null
  }
  return `Не должно быть пустым`
}


