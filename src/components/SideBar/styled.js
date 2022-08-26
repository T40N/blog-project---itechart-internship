import styled from "styled-components";

export const Container = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mono200};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const MainStyled = styled.main``;

export const FooterStyled = styled.footer`
  height: 20%;
  width: 100%;
`;
