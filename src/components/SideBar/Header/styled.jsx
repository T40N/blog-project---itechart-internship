import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem 1rem 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mono300};
  display: grid;
  grid-template: 3fr 1fr / auto;
  gap: 1rem;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SnipetInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.mono500};
  }

  p {
    font-size: 1.125rem;
    font-style: italic;
  }
`;

export const TabSwitchContainer = styled.div`
  display: grid;
  grid-template: auto / auto auto;
`;

export const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 
    ${({ active }) => active ? '.25rem' : '0'}
    solid 
    ${({ active, theme }) => active ? theme.colors.mono500 : theme.colors.mono400};
  cursor: pointer;
  user-select: none;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.s};
    font-weight: ${({ active }) => active && 'bolder'};
    text-transform: uppercase;
    color: ${({ active, theme }) => active ? theme.colors.mono500 : theme.colors.mono400};
  }

  &:hover {
    h1 {
      color: ${({ theme }) => theme.colors.mono500};
    }
  }

  /* @media (max-width: 1024px) and (min-width: 390px) {
    display: none;
  } */
`;

export const SnippetContainer = styled.header`
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`