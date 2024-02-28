import { TypeGender } from "../components/SelelectGenderProfile";

export interface IUser {
  acceptTerms: boolean;
  email: string;
  phone: string;
  userName: string;
  gender?: TypeGender;
  age: string;

  weight: string;
  height: string;
  timeToWakeUp: Date;
  timeToSleep: Date;
}

export interface IUpdateUser {
  email?: string;
  username?: string;
  gender?: string;
  age?: string;
}