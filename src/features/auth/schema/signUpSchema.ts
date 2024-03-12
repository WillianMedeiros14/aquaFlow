import * as yup from "yup";
import { ISignUp } from "../types/auth";

export const signUpSchema = yup
  .object({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "O nome precisa ter no mínimo 5 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "A senha precisa ter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "confirmPassword",
        "As senhas precisam ser iguais",
        async (value, values: yup.TestContext) => {
          const parentValues = values.parent as ISignUp;
          const confirmPassword = parentValues?.password;
          if (value === confirmPassword) {
            return true;
          } else {
            return false;
          }
        }
      ),
    phone: yup.string().required("Campo obrigatório"),
    acceptTerms: yup
      .boolean()
      .test(
        "confirmPassword",
        "Você precisar aceitar os termos de uso e políticas de privacidade",
        async (value) => {
          if (value === false) {
            return false;
          } else {
            return true;
          }
        }
      ),
  })
  .required();
