import * as yup from "yup";

export const schemaCompleteProfile = yup.object({
  gender: yup.string().required("Campo obrigatório"),
  age: yup
    .number()
    .required("Campo obrigatório")
    .typeError("O valor deve ser um número.") // Adicionamos esta linha para tratar o erro de tipo
    .positive("A idade deve ser um número positivo.") // Opcional: podemos adicionar validação adicional para números positivos
    .integer("A idade deve ser um número inteiro."), // Opcional: podemos adicionar validação para números inteiros
  weight: yup.string().required("Campo obrigatório"),
  height: yup.string().required("Campo obrigatório"),
  timeToWakeUp: yup.date().required("Campo obrigatório"),
  timeToSleep: yup.date().required("Campo obrigatório"),
});

export default schemaCompleteProfile;
