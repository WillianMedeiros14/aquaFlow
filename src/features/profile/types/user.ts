import { TypeGender } from "../components/SelelectGenderProfile";

export interface IUser {
  acceptTerms: boolean;
  email: string;
  phone: string;
  userName: string;
  gender?: TypeGender;
  age: string;
}

export interface IUpdateUser {
  email?: string;
  username?: string;
  gender?: string;
  age?: string;
}
