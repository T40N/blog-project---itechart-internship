import styled from "styled-components";

const Button = styled.button`
  height: ${({ height }) => (height ? height : "1.2rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.mono100};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};

  &::hover {
    color: ${({ theme }) => theme.colors.mono500};
  }
`;

export default Button;
