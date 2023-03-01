import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PrimaryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 32px 48px;
  width: 128px;
  height: 96px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 24px;
  margin: 0 16px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 24px;
`;
