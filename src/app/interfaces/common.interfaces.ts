export interface IPayload<T> {
  payload: T;
  id?: string;
}

export interface IStateLoader {
  auth: any;
  general: any;
}

export interface IDiverse {
  [k: string]: any;
}

export enum EHandler {
  HandlerHome = 'handlerHome',
  HandlerBack = 'handlerBack',
  HandlerOpenNavMenu = 'handlerOpenNavMenu',
  HandlerBackToScreenshotsMenu = 'handlerBackToScreenshotsMenu',
  HandlerCreateScreenshotsList = 'handlerCreateScreenshotsList',
}

export interface IStateControl {
  // [index: string]: any;
  // tester: string;
  icon: string;
  handler: EHandler;
}
