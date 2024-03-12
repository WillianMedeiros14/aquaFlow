import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebaseConfig";

export interface IDeleteUserAndDataServiceProps {
  userId: string;
}

export async function deleteUserAndDataService({
  userId,
}: IDeleteUserAndDataServiceProps) {
  await auth.currentUser?.delete();

  const userDocRef = doc(db, "users", userId);
  await deleteDoc(userDocRef);

  console.log("User account and related data deleted successfully.");
}
