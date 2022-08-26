import styled from "styled-components";

const Button = styled.button`
  height: ${({ height }) => (height ? height : "2.2rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: none;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  background-color: transparent;
  box-shadow: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow ease 500ms, color ease 500ms,
    background-color ease 500ms;

  &:hover {
    color: ${({ theme }) => theme.colors.mono500};
    background-color: ${({ theme }) => theme.colors.mono100};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  }
`;

export default Button;
