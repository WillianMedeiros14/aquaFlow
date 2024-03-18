import {
  auth,
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "../../../../firebaseConfig";

export interface IAddingWaterConsumptionServiceServiceProps {
  id: string;
  dailyAmountOfWater?: number;
  data: {
    amountOfWaterConsumed: number;
    nextTimeToDrinkWater: string;
  };
}

export async function addingWaterConsumptionService({
  id,
  data,
}: IAddingWaterConsumptionServiceServiceProps) {
  const docRef = doc(db, "historic", id);

  return updateDoc(docRef, {
    ...data,
  });
}
