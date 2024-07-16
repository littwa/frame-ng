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
