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

export function calculateTheNextTimeToDrinkWater(currentHours: Date) {
  const valueCurrentHours = new Date(currentHours);

  valueCurrentHours.setHours(valueCurrentHours.getHours() + 1);
  valueCurrentHours.setMinutes(0);

  const formattedNextHour = valueCurrentHours.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedNextHour;
}

export function calculateNextHourWater(currentFormattedHour: string) {
  const hourWithoutAmPm = currentFormattedHour.replace(/( AM| PM)/i, "");

  const currentTime = new Date(`2000-01-01T${hourWithoutAmPm}`);
  currentTime.setHours(currentTime.getHours() + 1);
  currentTime.setMinutes(0);

  if (currentTime.getHours() >= 12) {
    const formattedNextHour = `${currentTime.getHours()}:00 PM`;

    return formattedNextHour;
  } else {
    const formattedNextHour = `${currentTime.getHours()}:00 AM`;

    return formattedNextHour;
  }
}
