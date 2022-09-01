import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "../shared";

export const Container = styled.aside`
  position: sticky;
  z-index: 5;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100vh;
  display: grid;
  grid-template: 2fr 5fr auto / auto;
  background-color: ${({ theme }) => theme.colors.mono200};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  min-width: 20rem;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.medium}) and (min-width: ${({ theme }) =>
      theme.breakpoints.small}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: ${({ openMenu }) => (openMenu ? "grid" : "none")};
    position: fixed;
    width: 100vw;
  }
`;

export const MobileSnippet = styled.aside`
  display: none;
  top: 0;
  left: 0;
  width: fit-content;
  position: sticky;
  height: 100vh;
  grid-template: 2fr 5fr auto / auto;
  background-color: ${({ theme }) => theme.colors.mono200};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.medium}) and (min-width: ${({ theme }) =>
      theme.breakpoints.small}) {
    display: ${({ openMenu }) => (openMenu ? "none" : "grid")};
  }
`;

export const ListButton = styled(NavLink)`
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

export const Hamburger = styled(Icon)`
  z-index: 10;
  display: none;
  top: 0;
  right: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.mono300};
  border-radius: 100% 0% 0% 100% / 0% 0% 100% 100%;
  padding: 0.5rem 0.5rem 1rem 1rem;
  user-select: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;
