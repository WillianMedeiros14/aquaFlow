import { useMutation } from "@tanstack/react-query";

import Toast from "react-native-toast-message";

import { useAuth } from "@global/context/useAuth";

import {
  IDeleteUserAndDataServiceProps,
  deleteUserAndDataService,
} from "../services/deleteUser.Service";

export function useDeleteUserAndData() {
  const logOut = useAuth((state) => state.logOut);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IDeleteUserAndDataServiceProps) => {
      return deleteUserAndDataService({ userId: data.userId });
    },
    onSuccess: (data) => {
      logOut();
      Toast.show({
        text1: "Conta deletada com sucesso",
      });
    },
    onError: (e, variables, context) => {
      console.log({ e });
      Toast.show({
        text1: "Erro ao deletar conta",
        type: "error",
      });
    },
  });

  return {
    mutate,
    isPending: isPending,
  };
}
