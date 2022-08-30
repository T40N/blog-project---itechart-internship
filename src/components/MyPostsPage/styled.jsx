import styled from "styled-components";
import { Icon } from "../shared";

export const TitleIcon = styled(Icon)`
    grid-area: go;
`

export const TitleContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.mono200};
    border-radius: ${({ theme }) => theme.borderRadius.m};
    box-shadow: ${({ theme }) => theme.shadows.shadowLight};
    display: grid;
    grid-template-columns: min-content max-content auto 10%;
    grid-template-areas: "title date . go";
    align-items: center;
  
  h2{
    margin: 1rem;
    margin-left: 1.1rem;
    grid-area: title;
    color:  ${({ theme }) => theme.colors.mono500};
    font-size: ${({ theme }) => theme.font.sizes.m};
  }

  p{
    grid-area: date;
    color:  ${({ theme }) => theme.colors.mono400};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    }
    
`
export const PostsContainer = styled.div`
    margin: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`