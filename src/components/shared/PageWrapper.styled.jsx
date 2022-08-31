import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: minmax(min-content, max-content) auto / auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
    grid-column: span 2;
  }
`;

export default PageWrapper;
