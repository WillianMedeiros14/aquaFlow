interface IDailyAmountOfWaterProps {
  weight: string;
}

const AMOUNT_OF_ML_OF_BASE_WATER = 35;

export function dailyAmountOfWater({ weight }: IDailyAmountOfWaterProps) {
  const resultDailyAmountOfWater =
    parseInt(weight) * AMOUNT_OF_ML_OF_BASE_WATER;

  return resultDailyAmountOfWater;
}

interface IRangeOfWakingHoursProps {
  sleepTime: Date;
  wakeTime: Date;
}

export function rangeOfWakingHours({
  sleepTime,
  wakeTime,
}: IRangeOfWakingHoursProps) {
  const sleepTimeResult = sleepTime.getHours();
  const wakeTimeResult = wakeTime.getHours();

  const sleepTimeResultValue = sleepTimeResult === 0 ? 24 : sleepTimeResult;

  let awakeHours = sleepTimeResultValue - wakeTimeResult;
  return awakeHours;
}

interface ICalculateWaterDistributionProps {
  dailyAmountOfWater: number;
  awakeHours: number;
}

export function calculateWaterDistribution({
  dailyAmountOfWater,
  awakeHours,
}: ICalculateWaterDistributionProps) {
  const waterPerHour = dailyAmountOfWater / awakeHours;

  return parseFloat(waterPerHour.toFixed(2));
}
