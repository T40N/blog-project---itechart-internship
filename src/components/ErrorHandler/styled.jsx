import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorDisplay = styled.div`
  height: 40%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  color: #d27676;
  font-size: ${({ theme }) => theme.font.sizes.m};
`;

export const ErrorIcon = styled.i`
  font-family: ${({ theme }) => theme.font.families.icon};
  color: #d27676;
`;
