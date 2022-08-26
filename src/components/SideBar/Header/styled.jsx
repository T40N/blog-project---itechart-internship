import styled from "styled-components";

export const Container = styled.header`
  height: 22%;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mono400};
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SnipetInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.mono500};
  }

  p {
    font-size: 1.125rem;
    font-style: italic;
  }
`;
