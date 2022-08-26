import styled from "styled-components";

export const Page = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.l};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
    padding: 2rem;

    h2{
        color: ${({ theme }) => theme.colors.mono500};
        font-size: ${({ theme }) => theme.font.sizes.xl};
        font-weight: ${({ theme }) => theme.font.weight.m};
        margin-bottom: .5rem;
    }

    h3{
        font-size: ${({ theme }) => theme.font.sizes.m};
        color: ${({ theme }) => theme.colors.mono400};
        font-weight: ${({ theme }) => theme.font.weight.s};
        margin-bottom: 1rem;
    }
    
    p {
        font-size: ${({ theme }) => theme.font.sizes.xs};
        color: ${({ theme }) => theme.colors.mono500};
        font-weight: ${({ theme }) => theme.font.weight.s};
        margin-bottom: 2rem;
        white-space: pre-line;
    }
`