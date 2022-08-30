import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: minmax(min-content, max-content) auto / auto;
  overflow-x: hidden;
`;

export default PageWrapper;
