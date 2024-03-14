import {
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "../../../../firebaseConfig";
import { IUserDetailsWaterByDate } from "../types/infoWater";

export interface IGetUserDetailsWaterByDateServiceProps {
  userId: string;
  date: string;
}

export async function getUserDetailsWaterByDateService({
  userId,
  date,
}: IGetUserDetailsWaterByDateServiceProps) {
  const docRef = collection(db, "historic");

  const queryObject = query(
    docRef,
    where("userId", "==", `${userId}`),
    where("date", "==", `${date}`)
  );

  const docSnap = await getDocs(queryObject);

  let value: any;

  docSnap.forEach((doc) => {
    const data = doc.data() as IUserDetailsWaterByDate;
    if (data.userId === userId && data.date === date) {
      value = data;
    }
  });

  if (value?.userId) {
    return value as IUserDetailsWaterByDate;
  } else {
    return null;
  }
}
