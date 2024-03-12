import { ClockSvg } from "@assets/icons/iconsBottomTabBar";
import styled from "styled-components/native";

export function IconAlarm() {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <ClockSvg />
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 15px;
  background-color: white;

  margin-top: -40px;
`;
