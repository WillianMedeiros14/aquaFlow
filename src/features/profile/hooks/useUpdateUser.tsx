import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@global/context/useAuth";
import {
  IUpdateUserServiceProps,
  updateUserService,
} from "../services/updateUser.service";
import { signUpSchema } from "../schema/updateUserSchema";
import { IUpdateUser } from "../types/user";

export function useUpdateUser() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IUpdateUser>({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: IUpdateUserServiceProps) => {
      return updateUserService(data);
    },
    onSuccess: (data) => {
      Toast.show({
        text1: "Dados  atualizado com sucesso!",
      });
    },
    onError: (e, variables, context) => {
      const { message, name, cause, stack } = e;
      console.log({ message, name, cause, stack });

      Toast.show({
        text1: "Erro ao atualizar dados",
        type: "error",
      });
    },
  });

  return {
    mutate,
    isPending,
    errors,
    control,
    handleSubmit,
    setError,
    setValue,
    isSuccess,
  };
}
