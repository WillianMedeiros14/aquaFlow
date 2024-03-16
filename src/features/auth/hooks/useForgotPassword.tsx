import { useMutation } from "@tanstack/react-query";
import { IForgotPassword, ISignIn } from "../types/auth";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { forgotPasswordService } from "../services/forgotPassword.service";
import { useNavigation } from "@react-navigation/native";
import { schemaForgotPassword } from "../schema/schemaForgotPassword";

export function useForgotPassword() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForgotPassword>({
    resolver: yupResolver(schemaForgotPassword),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IForgotPassword) => {
      return forgotPasswordService(data);
    },
    onSuccess: (data) => {
      Toast.show({
        text1: "Email enviado com sucesso.",
      });

      navigation.goBack();
    },
    onError: (e, variables, context) => {
      const { message, name, cause, stack } = e;

      Toast.show({
        text1: "Erro ao enviar e-mail",
        type: "error",
      });
    },
  });

  return {
    mutate,
    isPending: isPending,
    errors,
    control,
    handleSubmit,
    setError,
  };
}
