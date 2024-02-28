import { useMutation } from "@tanstack/react-query";

import { ISignUp } from "../types/auth";
// import { useAuth } from "../../../shared/hook/useAuth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema/signUpSchema";
import {
  ISignUpInServiceProps,
  signUpService,
} from "../services/signUp.service";
import { useAuth } from "@global/context/useAuth";

export function useSignUp() {
  const setUser = useAuth((state) => state.setUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<ISignUp>({
    defaultValues: {
      acceptTerms: false,
    },
    resolver: yupResolver(signUpSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ISignUpInServiceProps) => {
      return signUpService({
        email: data.email,
        password: data.password,
        phone: data.phone,
        userName: data.userName,
        acceptTerms: data.acceptTerms,
      });
    },
    onSuccess: (data) => {
      Toast.show({
        text1: "Cadastro realizado com sucesso!",
      });
      setUser(
        {
          uid: data.user.uid,
        },
        false
      );
    },
    onError: (error, variables, context) => {
      const { message, name, cause, stack } = error;

      if (message === "Firebase: Error (auth/email-already-in-use).") {
        setError("email", { message: "Este e-mail já está em uso" });
      } else {
        Toast.show({
          text1: "Erro ao cria cadastro, tente novamente",
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
  };
}
