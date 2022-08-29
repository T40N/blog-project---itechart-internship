import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  max-width: 37rem;
  min-height: 44rem;
  width: 80%;
  height: 90%;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};

  a {
    color: ${({ theme }) => theme.colors.mono400};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  gap: 0.4rem;
`;

export const ButtonContainer = styled.div`
  width: 60%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.m};
  padding-left: 1.2rem;
`;

export const ErrorMsg = styled.p`
  color: #d27676;
  align-self: center;
  font-size: ${({ theme }) => theme.font.xs};
  margin-top: 1rem;
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
  text-align: center;
  max-width: 80%;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.s};
  width: 40%;
  align-self: center;
  text-align: center;
`;
