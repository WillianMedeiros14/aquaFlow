import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebaseConfig";

import { ICompleteProfile } from "../types/completeProfile";

export interface ICompleteProfileServiceProps {
  userId: string;
  data: ICompleteProfile;
}

export async function completeProfileService({
  userId,
  data,
}: ICompleteProfileServiceProps) {
  const user = auth.currentUser;

  if (user) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { ...data });
  } else {
    console.log("Nenhum usuário está logado");
  }
}
