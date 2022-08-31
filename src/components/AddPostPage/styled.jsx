import styled from "styled-components";
import Input from "../shared/Input.styled";

export const Container = styled.div`
    width: 90%;
    height: 90%;
    margin: 2rem;
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.l};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`
export const TopBox = styled.div`
    width: auto;
    margin-inline: 3rem;
    padding-block: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
    width: auto;
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 3rem;
    width: auto;
    height: auto;
    padding-bottom: 2rem;

    h3{
        padding: .5rem;
    }

    textarea{
        width: auto;
        background-color: ${({ theme }) => theme.colors.mono100};
        border: transparent;
        border-radius: ${({ theme }) => theme.borderRadius.s};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        height: 80%;
        box-shadow: ${({ theme }) => theme.shadows.shadowLight};
    }

    div{
        background-color: ${({ theme }) => theme.colors.mono100};
        border-radius: ${({ theme }) => theme.borderRadius.s};
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: ${({ theme }) => theme.shadows.shadowLight};
        padding: 1rem;
        margin-bottom: 1rem;

        p{
            color: ${({ theme }) => theme.colors.mono400};
        }
    }
`

export const TextButton = styled.button`

    width: auto;
    height: auto;
    background-color: transparent;
    border: transparent;
    color: ${({ theme }) => theme.colors.mono400};
    display: flex;
    
    &.hover{
        color: ${({ theme }) => theme.colors.mono500};
        font-weight: 600;
        background-color: transparent;
    }
`

export const StyledTextArea = styled.textarea`
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.colors.mono400};
    font-family: ${({ theme }) => theme.font.families.primary};
    outline: none;
`

export const StyledInput = styled(Input)`
    height: 2rem;
    font-size: ${({ theme }) => theme.font.sizes.s};
`