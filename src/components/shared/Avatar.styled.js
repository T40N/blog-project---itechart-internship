import styled from "styled-components";

const Avatar = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  border: 0.25rem solid ${({ theme }) => theme.colors.mono500};
  border-radius: 50%;
  width: 7.5rem;
  overflow: hidden;

  ${({ isInSidebar }) =>
    isInSidebar &&
    `
    &::after {
      content: "";
      position: absulote;
      top: 100%;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.mono500};
      left: 50%;
      tranform: translate(-50%, 0);
    }
  `}
`;

export default Avatar;
