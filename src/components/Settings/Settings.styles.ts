import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  width: ${Dimensions.get("window").width - 50 + "px"};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  box-shadow: 0px 5.5px 16px rgba(0, 0, 0, 0.19);
`;

export const Title = styled.Text`
  font-family: "Roboto_Flex_Bold";
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 32px;
  right: 32px;
`;

export const SettingsItems = styled.View`
  margin-top: 27px;
`;

export const SettingsItem = styled.View`
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsItemTitle = styled.Text`
  font-family: "Roboto_Flex_Regular";
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.TextInput`
  font-family: "Roboto_Flex_Regular";
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 66px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
`;
