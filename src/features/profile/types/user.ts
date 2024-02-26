export interface IUser {
  acceptTerms: boolean;
  email: string;
  phone: string;
  userName: string;
  gender: string;
  age: string;
}

export interface IUpdateUser {
  email?: string;
  username?: string;
  gender?: string;
  age?: string;
}
