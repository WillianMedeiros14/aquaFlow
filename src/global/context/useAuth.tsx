import { queryClient } from "@global/config/react-query";
import { ILoggedInUserContext } from "@global/types/loggedInUserContext";
import { create } from "zustand";

interface IAuthStore {
  user: ILoggedInUserContext;

  /**Faz o cadastro do usuário e armazena as informações recebidas
   * @param input - Objeto com as informações de cadastro usuário.
   * @param keepConnected - Boolean que define se a conexão deve ser salva.
   */
  setUser: (
    input: ILoggedInUserContext,
    keepConnected: boolean
  ) => Promise<void>;

  /**Limpa o usuário atualmente logado e seus detalhes
   */
  logOut: () => void;
}

export const useAuth = create<IAuthStore>((set, get) => ({
  user: {
    uid: "",
  },

  setUser: async (input, keepConnected) => {
    set(() => ({ user: input }));
    if (keepConnected) {
      //fazer o usuario permanencer logado
    }
  },

  logOut: async () => {
    queryClient.clear();
    set(() => ({
      user: {
        uid: "",
      },
    }));
  },
}));
