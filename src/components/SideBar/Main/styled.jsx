import styled from 'styled-components';

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