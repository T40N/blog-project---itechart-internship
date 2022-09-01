import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../shared/Avatar.styled";

export const Container = styled.div`
  width: 100%;
  height: 30%;
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-areas: "author snippet";
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      grid-template-columns: min-content auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    & {
      display: flex;
      flex-direction: column;
      height: 32%;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  grid-area: title;

  h2 {
    margin-block: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.l};
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    font-style: italic;
    color: ${({ theme }) => theme.colors.mono400};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin-bottom: 0;
        padding-top: 0.5rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smal}) {
    & {
      gap: 0;
      align-items: flex-start;

      h2 {
        word-wrap: normal;
        margin: 0;
      }

      p {
        display: none;
      }
    }
  }
`;

export const Snippet = styled.div`
  padding-left: 8%;
  grid-area: snippet;
  display: grid;
  justify-items: start;
  grid-template-columns: auto max-content;
  grid-template-rows: min-content auto max-content;
  border-left: 2px solid ${({ theme }) => theme.colors.mono300};
  grid-template-areas:
    "title  ."
    "snippet ."
    ". readMore";

  p {
    grid-area: snippet;
    color: ${({ theme }) => theme.colors.mono400};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    /* word-break: break-all; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-left: 5%;

      p {
        padding-right: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      display: flex;
      flex-direction: column;
      border: transparent;
    }
  }
`;

export const LinkStyled = styled(Link)`
  grid-area: readMore;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.xs};
  justify-self: end;
  align-self: end;
  margin: 1.5rem;
  margin-top: 0;
  padding-right: 1rem;
  display: flex;

  span {
    font-family: ${({ theme }) => theme.font.families.icon};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    color: ${({ theme }) => theme.colors.mono500};
  }

  &.hover {
    color: ${({ theme }) => theme.colors.mono500};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      align-items: flex-end;
    }
  }
`;

export const GridAvatar = styled(Avatar)`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      grid-area: avatar;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      & {
        transform: scale(0.8);
      }
    }
  }
`;

export const AuthorLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  grid-area: author;
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.m};
  gap: 1rem;
  text-decoration: none;

  h2 {
    padding-inline: 1rem;
  }

  p {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    & {
      transform: scale(0.7);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    & {
      display: grid;
      grid-template-columns: min-content auto;
      grid-template-rows: 50% 50%;
      grid-template-areas:
        "avatar name"
        "avatar date";
      gap: 0;

      p {
        display: block;
        font-size: ${({ theme }) => theme.font.sizes.xs};
        font-style: italic;
        color: ${({ theme }) => theme.colors.mono400};
        grid-area: date;
      }

      h2 {
        grid-area: name;
      }
    }
  }
`;
