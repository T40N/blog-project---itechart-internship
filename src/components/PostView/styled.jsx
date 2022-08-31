import styled, { css } from 'styled-components';
import { ListButtonLinkless, Input, Avatar } from '../shared';
import { Container as HeaderContainer } from "../shared/Header/styled";

const sharedStyles = css`
    min-width: calc(100% - 2rem);
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    /* gap: 1rem; */

    h2 {
        color: ${({ theme }) => theme.colors.mono500};
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    h3 {
        color: ${({ theme }) => theme.colors.mono400};
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    p {
        line-height: ${({ theme }) => theme.font.sizes.l};
    }
`

export const Post = styled.div`
    ${sharedStyles};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    gap: 1rem;

    h2 {
        color: ${({ theme }) => theme.colors.mono500};
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    h3 {
        color: ${({ theme }) => theme.colors.mono400};
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    p {
        line-height: ${({ theme }) => theme.font.sizes.l};
    }
`;

