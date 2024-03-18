import { useAuth } from "@global/context/useAuth";
import {
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "../../../../firebaseConfig";
import { IUserDetailsWaterByDate } from "../types/infoWater";
import {
  calculateTheNextTimeToDrinkWater,
  calculateWaterDistribution,
  dailyAmountOfWater,
  rangeOfWakingHours,
} from "@global/utils/calculatingDailyGoals";
import { IDataSendHistoricUser } from "@features/completeProfile/types/completeProfile";
import { queryClient } from "@global/config/react-query";

export interface IGetUserDetailsWaterByDateServiceProps {
  userId: string;
  date: string;
  dataHistoric?: IDataSendHistoricUser;
  enabled?: boolean;
}

export async function getUserDetailsWaterByDateService({
  userId,
  date,
  dataHistoric,
}: IGetUserDetailsWaterByDateServiceProps) {
  const docRef = collection(db, "historic");

  const queryObject = query(
    docRef,
    where("userId", "==", `${userId}`),
    where("date", "==", `${date}`)
  );

  const docSnap = await getDocs(queryObject);

  let value: any;

  if (docSnap.docs.length === 0) {
    // console.log("Sem dados ainda", dataHistoric);
    const historicRef = doc(collection(db, "historic"));

    await setDoc(historicRef, { ...dataHistoric });

    return "create";
  } else {
    docSnap.forEach((doc) => {
      const data = doc.data() as IUserDetailsWaterByDate;
      if (data.userId === userId && data.date === date) {
        value = {
          ...data,
          id: doc.id,
        };
      }
    });
  }

  if (value?.userId) {
    return value as IUserDetailsWaterByDate;
  } else {
    return null;
  }
}
