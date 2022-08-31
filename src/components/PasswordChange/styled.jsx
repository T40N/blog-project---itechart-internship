import styled from "styled-components";

export const Form = styled.form`
  padding: 4rem 0;
  max-width: 37rem;
  width: 80%;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
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
