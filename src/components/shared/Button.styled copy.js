import styled from "styled-components";

const ActionButton = styled.button`
  height: ${({ height }) => (height ? height : "3rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border: none;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  background-color:  ${({ theme }) => theme.colors.mono100};
  border: solid 3px  ${({ theme }) => theme.colors.mono300};
  box-shadow: inherit;
  color: ${({ theme }) => theme.colors.mono500};
  cursor: pointer;
  transition: background-color ease 500ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mono300};
  }
`;

export default ActionButton;