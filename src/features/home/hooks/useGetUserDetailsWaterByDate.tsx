import { useQuery } from "@tanstack/react-query";
import {
  IGetUserDetailsWaterByDateServiceProps,
  getUserDetailsWaterByDateService,
} from "../services/getUserDetailsWaterByDate.service";

export function useGetUserDetailsWaterByDate({
  userId,
  date,
  dataHistoric,
}: IGetUserDetailsWaterByDateServiceProps) {
  return useQuery({
    queryKey: ["keyGetUserDetailsWaterByDate", userId, date],
    queryFn: () =>
      getUserDetailsWaterByDateService({
        date,
        userId,
        dataHistoric,
      }),
  });
}
