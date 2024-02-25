export interface ISignUp {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  phone: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}
