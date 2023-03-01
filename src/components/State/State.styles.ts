import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  flex-direction: row;
`;

export const StateTitle = styled.Text`
  font-family: "Roboto_Flex_Medium";
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 8px;
`;
