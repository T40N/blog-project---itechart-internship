import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 30%;
    display: grid;
    grid-template-columns: 2fr 11fr;
    grid-template-areas: "author snippet";
    background-color:  ${({ theme }) => theme.colors.mono200};
    border-radius:  ${({ theme }) => theme.borderRadius.l};
`

export const Author = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    grid-area: author;
    color:  ${({ theme }) => theme.colors.mono500};
    font-size:  ${({ theme }) => theme.font.sizes.m};
`
export const Date = styled.p`
    font-size:  ${({ theme }) => theme.font.sizes.xs};
    font-style: italic;
    color:  ${({ theme }) => theme.colors.mono400};
    grid-area: date;
`

export const Snippet = styled.div`
    grid-area: snippet;
    display: grid;
    grid-template-columns: min-content auto 15rem;
    grid-template-rows: min-content min-content;
    row-gap: 1rem;
    grid-template-areas: "title date ."
    "snippet snippet readMore";

    h2{
        grid-area: title;
        color:  ${({ theme }) => theme.colors.mono500};
        font-size:  ${({ theme }) => theme.font.sizes.l};
    }

    p{
        grid-area: snippet;
        color:  ${({ theme }) => theme.colors.mono400};
        font-size:  ${({ theme }) => theme.font.sizes.xs};
    }

    Link{
        grid-area: readMore;
        color:  ${({ theme }) => theme.colors.mono500};
        font-size:  ${({ theme }) => theme.font.sizes.xs};
    }
`