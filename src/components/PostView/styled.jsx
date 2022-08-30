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
    min-height: 100%;
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

export const AddComment = styled.div`
    ${sharedStyles};
    display: flex;
    justify-content: center;
    padding: 1rem;
`;

export const SectionHeader = styled(HeaderContainer)`
    border-top: 2px solid ${({ theme }) => theme.colors.mono300};
    border-bottom: none;
    width: 100%;
`;

export const CommentInput = styled(Input)`
    width: 70%;
    font-family: ${({ theme }) => theme.font.families.primary};
`;

export const AddCommentButton = styled(ListButtonLinkless)`
    width: fit-content;
    gap: .5rem;

    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.mono500};
        font-weight: bolder;
    }
`;

export const CommentsSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`;

export const Comment = styled.div`
    ${sharedStyles};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    p {
        padding-left: 1rem;
    }
`;

export const CommentAvatar = styled(Avatar)`
    transform: scale(0.45);
`;

export const CommentLabel = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    h2 {
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    h3 {
        font-size: ${({ theme }) => theme.font.sizes.s};
    }
`;

export const Form = styled.form`
  min-width: calc(100% - 2rem);
`;

export const CommentAuthor = styled.div`
    display: flex;
`;