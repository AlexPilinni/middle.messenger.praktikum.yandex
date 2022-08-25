import {Block} from "../block";
import {isEqual} from "../utils/is-equal";
import {BlockInheritor, RouteProps} from "../types";


export class Route {
  private readonly _pathname: string;
  private readonly _blockClass: BlockInheritor;
  private _block: InstanceType<typeof Block> | null;
  private _props: RouteProps;

  constructor(pathname: string, view: BlockInheritor, props: RouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(undefined, this._props.rootQuery);
      return;
    }

    this._block.show();
  }
}
