export interface ILoggedInUserContext {
  uid: string;
  isVerification: boolean;

  gender?: string;
  age?: number;
  weight?: string;
  height?: string;
  timeToWakeUp?: Date;
  timeToSleep?: Date;
  rangeOfWakingHours?: number;
}
