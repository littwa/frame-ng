import { IStateAuth } from './auth.interfaces';
import { IStateLoader } from './common.interfaces';

export interface IStore {
  auth: IStateAuth;

  // users: any;
  loader: IStateLoader;
  // error: any;

  [key: string]: any;
}
