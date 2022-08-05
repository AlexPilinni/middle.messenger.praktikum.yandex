export function resizeTextArea(textarea: HTMLInputElement) {
  const padding = 20;
  const border = 1;
  const lineHeight = 12;
  const textAreaHeight = 32;
  const widthField = textarea.offsetWidth - padding*2 - border*2;
  const helper = (document.querySelector('.chat__input-helper') as HTMLElement);
  helper.innerHTML = `${textarea.value}`;
  const widthHelper = (helper as HTMLElement).offsetWidth;
  const strings = Math.floor(widthHelper/widthField);
  if (strings < 5) {
    textarea.style.height = `${textAreaHeight + lineHeight*strings}px`
  }
}
