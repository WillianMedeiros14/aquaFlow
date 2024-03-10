import Text from "@global/components/Text";
import * as S from "./styles";

import { NotificationSvg } from "@assets/icons";
import { scale } from "react-native-size-matters";
import { useAuth } from "@global/context/useAuth";
import { useGetUserDetails } from "@features/profile/hooks/useGetUserDetails";
import { getGreeting } from "@features/home/functions/getGreeting";

export function HeaderHomeScreen() {
  const user = useAuth((state) => state.user);

  const { data, isLoading, refetch } = useGetUserDetails({
    userId: user?.uid,
  });

  return (
    <S.Container>
      <S.ContentLeft>
        <Text variant="Poppins_500Medium" fontSize={15} color="grayQuaternary">
          {getGreeting()},
        </Text>

        <Text variant="Poppins_600SemiBold" fontSize={20} color="grayText">
          {data?.userName}
        </Text>
      </S.ContentLeft>

      <S.ButtonNotification>
        <NotificationSvg width={scale(20)} height={scale(20)} />

        <S.InfoNotification />
      </S.ButtonNotification>
    </S.Container>
  );
}
