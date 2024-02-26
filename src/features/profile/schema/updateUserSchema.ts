import * as yup from "yup";

export const signUpSchema = yup
  .object({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "O nome precisa ter no mínimo 5 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    // phone: yup.string().required("Campo obrigatório"),
    gender: yup.string().required("Campo obrigatório"),
    age: yup.number().required("Campo obrigatório"),
  })
  .required();
