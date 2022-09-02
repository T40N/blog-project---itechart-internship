import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const Content = styled.div`
  height: 40%;
  width: 50%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.m};
  text-align: center;

  h1{
    padding-inline: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  Button{
    width: min-content;
    min-width: 30%;
    padding: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    flex-direction: column;
  }
`;
