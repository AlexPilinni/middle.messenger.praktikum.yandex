declare module '*.pug' {
  const tpl: (param?: unknown) => string;
  export default tpl;
}
