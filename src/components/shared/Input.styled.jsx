import styled from "styled-components";

const Input = styled.input`
  height: ${({ height }) => (height ? height : "4rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme }) => theme.colors.mono100};
  color: ${({ theme }) => theme.colors.mono400};
  font-size: ${({ theme }) => theme.font.sizes.l};
  padding-left: 1.2rem;
  caret-color: ${({ theme }) => theme.colors.mono400};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono400};
  }

  &:focus,
  &:hover {
    outline: none;
  }
`;

export default Input;
