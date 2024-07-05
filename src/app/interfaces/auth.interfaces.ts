export interface IPayload<T> {
  payload: T;
  id?: string;
}

export interface IAuthSignUpRequest {
  email: string;
  role?: string;
  age?: number;
  password?: string;
}

export interface IAuthSignInRequest {
  email: string;
  password?: string;
}

export interface IStateAuth extends IStateError {
  user: IStateUser;
  tokens: IStateToken;
  // error: any;
}

export interface IStateUser {
  _id: string;
  isAuthenticated: boolean;
  email: string;
  role: string;
  localization: string;
  username: string;
  socialAuth: string;
  avatarURL: string;
  [key: string]: any;
}

export interface IStateError {
  error: any;
}

export interface IStateToken {
  accessToken: string;
  refreshToken: string;
}
