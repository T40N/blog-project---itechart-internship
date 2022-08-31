import styled, { css } from 'styled-components';
import { Avatar } from '../shared';

const sharedStyles = css`
    min-width: calc(100% - 2rem);
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`;

export const Container = styled.div`
    ${sharedStyles};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    p {
        padding-left: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
        align-items: center;
        gap: 1rem;

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
        font-size: ${({ theme }) => theme.font.sizes.xs};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small }) {
        justify-content: center;
        flex-direction: column;
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