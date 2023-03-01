import styled from "styled-components/native";

export const Container = styled.View``;

export const Timing = styled.Text`
  font-family: "Roboto_Flex_Regular";
  font-weight: 200;
  font-size: 256px;
  line-height: 250px;
  color: ${({ theme }) => theme.colors.primary};
`;
