import styled from "styled-components";
import { Icon } from "../shared";

export const TitleIcons = styled.div`
  grid-area: go;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-right: 1rem;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      margin-left: 1.1rem;
    }
  }
`;

export const TitleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  display: grid;
  margin-inline: 2rem;
  grid-template-columns: max-content auto max-content;
  grid-template-areas: "title date go";
  align-items: center;

  h2 {
    margin: 1rem;
    margin-left: 1.1rem;
    grid-area: title;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.m};
  }

  p {
    grid-area: date;
    color: ${({ theme }) => theme.colors.mono400};
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      gap: 0.8rem;

      p {
        margin-left: 1.1rem;
      }

      h2 {
        margin-bottom: 0;
      }
    }
  }
`;
export const PostsContainer = styled.div`
  margin: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3{
    justify-self: center;
    align-self: center;
    margin-top: 5%;
    color: ${({ theme }) => theme.colors.mono400};
  }
`;

export const MyPostIcon = styled(Icon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mono400};

  &:hover {
    color: ${({ theme }) => theme.colors.mono500};
  }
`;
