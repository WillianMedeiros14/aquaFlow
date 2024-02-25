import * as yup from "yup";

export const schemaSignIn = yup
  .object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  })
  .required();
