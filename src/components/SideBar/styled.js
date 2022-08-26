import styled from "styled-components";

export const Container = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  /* width: 20%; */
  width: fit-content;
  /* padding: 1rem; */
  height: 100vh;
  display: grid;
  grid-template: 2fr 5fr 2fr / auto;
  background-color: ${({ theme }) => theme.colors.mono200};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const FooterStyled = styled.footer`
  /* height: 20%; */
  /* width: 100%; */
`;
