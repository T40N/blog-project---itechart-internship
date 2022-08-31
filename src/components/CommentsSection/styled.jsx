import styled, { css } from 'styled-components';
import { ListButtonLinkless, Input } from '../shared';
import { Container as HeaderContainer } from "../shared/Header/styled";

const sharedStyles = css`
    min-width: calc(100% - 2rem);
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const AddComment = styled.div`
    ${sharedStyles};
    display: flex;
    justify-content: center;
    padding: 1rem;
    max-width: calc(100% - 2rem);
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

export const CommentsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`;

export const Form = styled.form`
display: flex; 
width: 100%;
justify-content: space-around;

@media (max-width: ${({ theme }) => theme.breakpoints.small }) {
  flex-direction: column;
  align-items: center;
}
`;

