import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  /* width: 20%; */
  width: fit-content;
  /* padding: 1rem; */
  height: 100vh;
  display: grid;
  grid-template: 2fr 5fr 2fr / auto;
  background-color: ${({ theme }) => theme.colors.mono200};
  color: ${({ theme }) => theme.colors.mono400};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const FooterStyled = styled.footer`
  /* height: 20%; */
  /* width: 100%; */
`;

export const ListButton = styled(NavLink)`
    border: 0;
    outline: 0;
    background-color: transparent;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    width: 100%;
    padding: 1rem 1rem 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.mono400};
    cursor: pointer;
    transition: background-color ease-in-out .3s, color ease-in-out .3s;

    h2 {
        font-size: ${({ theme }) => theme.font.sizes.s};
        font-weight: inherit;
    }

    &:hover, &.active {
        background-color: ${({ theme }) => theme.colors.mono100};
        color: ${({ theme }) => theme.colors.mono500};
        font-weight: bolder;
    }
`;