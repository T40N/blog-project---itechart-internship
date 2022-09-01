import styled from "styled-components";
import { Avatar } from "../shared";

export const Container = styled.div`
  padding: 4rem 0;
  width: 90%;
  height: 95%;
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  display: grid;
  grid-template-columns: auto repeat(2, 14rem) auto;
  grid-template-rows: repeat(9, minmax(min-content, max-content));
  gap: 1.2rem;

  @media (max-width: 1024px) {
    /* background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: none;
    box-shadow: none; */
    grid-template-columns: auto repeat(2, 10rem) auto;
  }
`;

export const PersonalsAvatar = styled(Avatar)`
  grid-column: 2;
  align-self: center;
  justify-self: center;
`;

export const InfoLabel = styled.label`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.m};
  font-weight: ${({ theme }) => theme.font.weight.m};
  grid-column: 2;
  align-self: center;
  justify-self: center;
  width: min-content;
`;

export const InfoChange = styled.input`
  grid-column: 3;
  justify-self: flex-start;
  align-self: center;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.mono400};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.m};
  &:hover::placeholder,
  &:focus {
    color: ${({ theme }) => theme.colors.mono500};
  }

  &[type="file"] {
    display: none;
  }
`;

export const AvatarInputLabel = styled.label`
  grid-column: 3;
  justify-self: flex-start;
  align-self: center;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.mono400};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.m};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mono500};
  }
`;

export const Bio = styled.textarea`
  padding-top: 1.2rem;
  grid-column: 2 / span 2;
  text-align: center;
  height: 8rem;
  border: none;
  font-family: ${({ theme }) => theme.font.families.primary};
  background-color: transparent;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mono500};
    outline: none;
  }
`;

export const Line = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;
  height: ${({ height }) => height};
  width: 0.25rem;
  background-color: ${({ theme }) => theme.colors.mono300};
`;

export const SubmitButton = styled.button`
  grid-column: 2 / span 2;
  justify-self: center;
  align-self: center;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.mono400};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.sizes.m};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mono500};
  }
`;
