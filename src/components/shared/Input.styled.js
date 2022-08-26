import styled from "styled-components";

const Input = styled.input`
  height: ${({ height }) => (height ? height : "2rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mono100};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  transition: border ease 500ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono400};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.mono400};
  }

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.mono500};
  }
`;

export default Input;
