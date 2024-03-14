import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebaseConfig";

import {
  ICompleteProfile,
  IDataSendHistoricUser,
} from "../types/completeProfile";

export interface ICompleteProfileServiceProps {
  userId: string;
  dataUser: ICompleteProfile;
  dataHistoric: IDataSendHistoricUser;
}

export async function completeProfileService({
  userId,
  dataUser,
  dataHistoric,
}: ICompleteProfileServiceProps) {
  const user = auth.currentUser;

  if (user) {
    const userRef = doc(db, "users", userId);
    const historicRef = doc(collection(db, "historic"));

    await updateDoc(userRef, { ...dataUser });
    await setDoc(historicRef, { ...dataHistoric });
  } else {
    console.log("Nenhum usuário está logado");
  }
}
