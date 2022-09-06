import {Options} from "../services/http-service";

export class BaseAPI {
  public create(options: Options): Promise<unknown> { throw new Error('Not implemented'); }
  public get(options: Options): Promise<unknown> { throw new Error('Not implemented'); }
  public update(options: Options): Promise<unknown> { throw new Error('Not implemented'); }
  public delete(options: Options): Promise<unknown> { throw new Error('Not implemented'); }
}
