import { doc, setDoc } from "firebase/firestore";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
} from "../../../../firebaseConfig";

export interface ISignUpInServiceProps {
  email: string;
  password: string;
  phone: string;
  userName: string;
  acceptTerms: boolean;
}

export async function signUpService(data: ISignUpInServiceProps) {
  const response = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  if (response.user) {
    const userId = response.user.uid;

    try {
      const docRef = await setDoc(doc(db, "users", userId), {
        email: data.email,
        phone: data.phone,
        userName: data.userName,
        acceptTerms: data.acceptTerms,
      });

      return docRef;
    } catch (error) {
      console.log("Error dentro do banco");

      await response.user.delete();
      throw error;
    }
  } else {
    return response;
  }
}
