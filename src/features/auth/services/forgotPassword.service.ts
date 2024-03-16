import { auth, sendPasswordResetEmail } from "../../../../firebaseConfig";

interface IForgotPasswordServiceProps {
  email: string;
}

export async function forgotPasswordService(data: IForgotPasswordServiceProps) {
  const response = await sendPasswordResetEmail(auth, data.email);
  return response;
}
