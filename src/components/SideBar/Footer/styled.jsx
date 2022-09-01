import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  /* overflow: scroll; */
`;

export const LinkIssues = styled.a`
  border: 0;
  outline: 0;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mono400};
  cursor: pointer;
  user-select: none;
  transition: background-color ease-in-out 0.3s, color ease-in-out 0.3s;

  h2 {
    font-size: ${({ theme }) => theme.font.sizes.s};
    font-weight: inherit;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.mono100};
    color: ${({ theme }) => theme.colors.mono500};
    font-weight: bolder;
  }
`;
