import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.mono300};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.mono100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 4.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.colors.mono200};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${({ theme }) => theme.font.sizes.l};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.mono500};
  }
`;
