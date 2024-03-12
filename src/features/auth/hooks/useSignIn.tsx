import { useMutation } from "@tanstack/react-query";
import { ISignIn } from "../types/auth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaSignIn } from "../schema/signInShema";
import { signInService } from "../services/signIn.service";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import { useMemo, useState } from "react";

export function useSignIn() {
  const setUser = useAuth((state) => state.setUser);
  const [idUser, setIdUser] = useState("");

  const { data, isLoading, isRefetching, refetch } = useGetUserDetails({
    userId: idUser,
    isEnabled: false,
  });

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
      setIdUser(data.user.uid);
      setTimeout(() => {
        refetch();
      }, 100);
    },
    onError: (e, variables, context) => {
      const { message, name, cause, stack } = e;

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

  const verify = useMemo(() => {
    if (data?.userName && !isLoading && !isRefetching) {
      Toast.show({
        text1: "Login realizado com sucesso!",
      });
      setUser(
        {
          uid: idUser,
        },
        false
      );
    }
  }, [data, isLoading, isRefetching, idUser, setUser]);

  return {
    mutate,
    isPending: isPending || isLoading || isRefetching,
    errors,
    control,
    handleSubmit,
    setError,
  };
}
