import styled from "styled-components";

const Input = styled.input`
  height: ${({ height }) => (height ? height : "1.2rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.mono100};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono400};
  }
`;

export default Input;
