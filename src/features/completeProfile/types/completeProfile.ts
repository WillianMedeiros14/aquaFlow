export interface ICompleteProfile {
  gender: string;
  age: number;
  weight: string;
  height: string;
  timeToWakeUp: Date;
  timeToSleep: Date;

  dailyAmountOfWater?: number;
  rangeOfWakingHours?: number;
  waterDistributionOnTheDay?: number;
}
