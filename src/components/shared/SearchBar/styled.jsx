import styled from "styled-components";
import Icon from "../Icon.styled";

export const Container = styled.form`
  border-bottom: 2px solid ${({ theme }) => theme.colors.mono300};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.mono100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.label`
  padding-left: 2rem;
  width: 100%;
  height: 4.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.colors.mono200};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
`;

export const SearchIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.font.sizes.xl};
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.mono400};
  caret-color: ${({ theme }) => theme.colors.mono400};
  font-size: ${({ theme }) => theme.font.sizes.l};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono400};
  }

  &:focus,
  &:hover {
    outline: none;
  }
`;
