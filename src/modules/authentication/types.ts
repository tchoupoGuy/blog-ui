export enum AuthStatus {
  NO_AUTH,
  NEEDS_PASSWORD_CHANGE
}

export interface SignInModel {
  email: string;
  password: string;
}

export interface NewPasswordModel {
  password: string;
}
