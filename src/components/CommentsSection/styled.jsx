import styled, { css } from 'styled-components';
import { ListButtonLinkless, Input, Avatar } from '../shared';
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

export const Comment = styled.div`
    ${sharedStyles};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    p {
        padding-left: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
        align-items: center;
        gap: .5rem;

        p {
            padding-left: 0;
        }
    }   
`;

export const CommentAvatar = styled(Avatar)`
    transform: scale(0.45);
`;

export const CommentLabel = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    h2 {
        font-size: ${({ theme }) => theme.font.sizes.l};
    }

    h3 {
        font-size: ${({ theme }) => theme.font.sizes.s};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
        justify-content: center;
        flex-direction: column;
    } 
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

export const CommentAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
      align-items: center;
      flex-direction: column;
  } 
`;