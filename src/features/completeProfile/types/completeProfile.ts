export interface ICompleteProfile {
  gender: string;
  age: number;
  weight: string;
  height: string;
  timeToWakeUp: Date;
  timeToSleep: Date;
  rangeOfWakingHours?: number;
}

export interface IDataSendHistoricUser {
  userId: string;
  dailyAmountOfWater: number;
  waterDistributionOnTheDay: number;
  amountOfWaterConsumed: number;
  date: string;
}
