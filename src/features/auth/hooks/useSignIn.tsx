import { useMutation } from "@tanstack/react-query";
import { ISignIn } from "../types/auth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaSignIn } from "../schema/signInShema";

export function useSignIn() {
  // const setUser = useAuth((state) => state.setUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignIn>({
    resolver: yupResolver(schemaSignIn),
  });

  // const { mutate, isPending } = useMutation({
  //   mutationFn: (data: ISignIn) => {
  //     // return signInService(data);
  //   },
  //   onSuccess: (data) => {
  //     console.log({ data });

  //     Toast.show({
  //       text1: "Login realizada com sucesso!",
  //     });
  //     setUser(data, true);
  //   },
  //   onError: (e, variables, context) => {
  //     const error = e as AxiosError;

  //     if (error?.status && error?.status >= 500) {
  //       Toast.show({
  //         text1: "Problemas no servidor interno",
  //         type: "error",
  //       });
  //     } else {
  //       if (error?.response?.status === 400) {
  //         setError(dataError.error, { message: dataError.message });
  //       } else {
  //         if (error.response?.status >= 500) {
  //           Toast.show({
  //             text1: "Problemas no servidor interno",
  //             type: "error",
  //           });
  //         } else {
  //           Toast.show({
  //             text1: "Erro ao realizar login",
  //             type: "error",
  //           });
  //         }
  //       }
  //     }
  //   },
  // });

  return {
    // mutate,
    isPending: false,
    errors,
    control,
    handleSubmit,
    setError,
  };
}
