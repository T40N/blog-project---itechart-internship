import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mono300};
    /* overflow: scroll; */
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