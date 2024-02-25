import { useMutation } from "@tanstack/react-query";

import { ISignUp } from "../types/auth";
// import { useAuth } from "../../../shared/hook/useAuth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema/signUpSchema";

export function useSignUp() {
  // const setUser = useAuth((state) => state.setUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ISignUp>({
    defaultValues: {
      acceptTerms: false,
    },
    resolver: yupResolver(signUpSchema),
  });

  // return useMutation({
  //   mutationFn: (data: ISignUp) => {
  //     return signUpService(data);
  //   },
  //   onSuccess: (data) => {
  //     console.log({ data });

  //     api.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${data.token.token}`;

  //     Toast.show({
  //       text1: "Cadastro realizada com sucesso!",
  //     });

  //     setUser(data, true);
  //   },
  //   onError: (error, variables, context) => {
  //     // An error happened!
  //     console.log({ error });
  //     console.log(error?.response?.data);
  //   },
  // });

  return {
    // mutate,
    isPending: false,
    errors,
    control,
    handleSubmit,
  };
}
