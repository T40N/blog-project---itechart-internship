import styled from "styled-components";

export const Form = styled.form`
  max-width: 37rem;
  min-height: 44rem;
  width: 80%;
  height: 80%;
  gap: 3rem;
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
