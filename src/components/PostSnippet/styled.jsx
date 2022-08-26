import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 30%;
  display: grid;
  grid-template-columns: 2fr 11fr;
  grid-template-areas: "author snippet";
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
`;

export const Author = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  grid-area: author;
  color: ${({ theme }) => theme.colors.mono500};
  font-size: ${({ theme }) => theme.font.sizes.m};
`;

export const Snippet = styled.div`
  grid-area: snippet;
  display: grid;
  grid-template-columns: min-content auto 15rem;
  grid-template-rows: min-content min-content;
  row-gap: 1rem;
  grid-template-areas:
    "title date ."
    "snippet snippet readMore";

  h2 {
    grid-area: title;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.l};
  }

  p:first-child {
    grid-area: snippet;
    color: ${({ theme }) => theme.colors.mono400};
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    font-style: italic;
    color: ${({ theme }) => theme.colors.mono400};
    grid-area: date;
  }

  /* Link {
    grid-area: readMore;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.xs};
  } */

  span {
    font-family: ${({ theme }) => theme.font.families.icon};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }
`;

export const LinkStyled = styled(Link)`
  &.active {
    grid-area: readMore;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;
