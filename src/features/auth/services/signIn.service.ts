import { auth, signInWithEmailAndPassword } from "../../../../firebaseConfig";

interface ISignInServiceProps {
  email: string;
  password: string;
}

export async function signInService(data: ISignInServiceProps) {
  const response = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );
  return response;
}
