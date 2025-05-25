import { IStateAuth } from './auth.interfaces';
import { IStateLoader } from './common.interfaces';
import { IScreenshot, IScreenshotsList } from './screenshots.interfaces';

export interface IStateScreenshots {
  list: IScreenshot;
  lists: IScreenshotsList[];
}

export interface IStore {
  auth: IStateAuth;
  // users: any;
  loader: IStateLoader;
  error: any;
  screenshots: IStateScreenshots;

  [key: string]: any;
}
