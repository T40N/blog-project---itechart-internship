import { styled } from "styled-components";

const ContainerFlex = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : "border-area")};
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "inherit")};
`;

export default ContainerFlex;
