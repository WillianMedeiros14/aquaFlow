import * as yup from "yup";

export const schemaForgotPassword = yup
  .object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
  })
  .required();
