import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebaseConfig";
import { updateEmail } from "firebase/auth";

export interface IUpdateUserServiceProps {
  userId: string;
  data: {
    userName?: string;
    gender?: string;
    age?: string;
  };
}

export async function updateUserService({
  userId,
  data,
}: IUpdateUserServiceProps) {
  const user = auth.currentUser;

  if (user) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, data);
  } else {
    console.log("Nenhum usuário está logado");
  }
}
