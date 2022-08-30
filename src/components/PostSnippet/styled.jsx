import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30%;
  display: grid;
  grid-template-columns: 18% 82%;
  grid-template-areas: "author snippet";
  background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};

  /* @media (max-width: 1024px){
      grid-template-columns: 30% 70%;
  } */
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  grid-area: title;

  /* @media (max-width: 1024px){
    flex-direction: column;
  } */

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.l};

    /* @media (max-width: 1024px){
      font-size: ${({ theme }) => theme.font.sizes.s};
    } */

  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    font-style: italic;
    color: ${({ theme }) => theme.colors.mono400};
  }
`;

export const Snippet = styled.div`
  padding-left: 3rem;
  grid-area: snippet;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: min-content auto 3rem;
  border-left: 2px solid ${({ theme }) => theme.colors.mono300};
  grid-template-areas:
    "title  ."
    "snippet ."
    ". readMore";

    /* @media (max-width: 1024px){
      grid-template-columns: auto;
      grid-template-areas: 
      "title"
      "snippet"
      "readMore";
    } */

  p {
    grid-area: snippet;
    color: ${({ theme }) => theme.colors.mono400};
    font-size: ${({ theme }) => theme.font.sizes.xs};
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
  display: flex;

  span {
    font-family: ${({ theme }) => theme.font.families.icon};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    color: ${({ theme }) => theme.colors.mono500};
    
  }

  &.active {
    color: ${({ theme }) => theme.colors.mono400};
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
`


