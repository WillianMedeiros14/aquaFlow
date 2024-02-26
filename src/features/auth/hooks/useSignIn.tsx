import { useMutation } from "@tanstack/react-query";
import { ISignIn } from "../types/auth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaSignIn } from "../schema/signInShema";
import { signInService } from "../services/signIn.service";

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

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ISignIn) => {
      return signInService(data);
    },
    onSuccess: (data) => {
      console.log({ data, user: data.user });

      Toast.show({
        text1: "Login realizado com sucesso!",
      });
      // setUser(data, true);
    },
    onError: (e, variables, context) => {
      console.log("error");
      const { message, name, cause, stack } = e;
      console.log({ message, name, cause, stack });

      if (message === "Firebase: Error (auth/invalid-credential).") {
        Toast.show({
          text1: "Dados de login incorretos",
          type: "error",
        });
        setError("email", { message: "Verifique seu email de login" });
        setError("password", { message: "Verifique sua senha" });
      } else {
        Toast.show({
          text1: "Erro ao realizar o login",
          type: "error",
        });
      }
    },
  });

  return {
    mutate,
    isPending,
    errors,
    control,
    handleSubmit,
    setError,
  };
}
