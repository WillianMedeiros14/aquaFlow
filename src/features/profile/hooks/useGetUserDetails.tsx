import { useQuery } from "@tanstack/react-query";

import {
  IGetUserDetailsServiceProps,
  getUserDetailsService,
} from "../services/getUserDetails.service";
import { useAuth } from "@global/context/useAuth";

export function useGetUserDetails({
  userId,
  isEnabled = true,
}: IGetUserDetailsServiceProps) {
  const user = useAuth((state) => state.user);
  const setUser = useAuth((state) => state.setUser);

  return useQuery({
    queryKey: ["keyUserDetails", userId],
    queryFn: async () => {
      const result = await getUserDetailsService({ userId });

      setUser(
        {
          ...result,
          uid: user.uid,
          isVerification:
            result?.gender !== undefined && result?.gender !== null
              ? true
              : false,
        } as any,
        true
      );

      return result;
    },
    enabled: isEnabled,
  });
}
