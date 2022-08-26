import styled from "styled-components";

const Button = styled.button`
  height: ${({ height }) => (height ? height : "4rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: 5px solid ${({ theme }) => theme.colors.mono300};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "11px"};
  background-color: ${({ theme }) => theme.colors.mono100};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  color: inherit;
  cursor: pointer;
  transition: background-color ease 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mono300};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  }
`;

export default Button;
