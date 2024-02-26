import { useQuery } from "@tanstack/react-query";

import {
  IGetUserDetailsServiceProps,
  getUserDetailsService,
} from "../services/getUserDetails.service";

export function useGetUserDetails({ userId }: IGetUserDetailsServiceProps) {
  return useQuery({
    queryKey: ["keyUserDetails", userId],
    queryFn: () => getUserDetailsService({ userId }),
  });
}
