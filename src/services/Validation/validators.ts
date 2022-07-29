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
