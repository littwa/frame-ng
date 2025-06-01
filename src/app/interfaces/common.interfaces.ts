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
  HandlerBackToScreenshotsLists = 'handlerBackToScreenshotsLists',
  HandlerBackToMainMenu = 'handlerBackToMainMenu',
}

// export type key1 = 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5';
//
// export type k22 = [1, 2, 3];

export interface IStateControl {
  // [index: string]: any;
  // tester: string;
  icon: string;
  handler: EHandler;
}

export interface IStateNavControl {
  [key: `btn${number}`]: IStateControl;
}

export interface IStateNavControlList {
  [k: string]: IStateNavControl;
}
