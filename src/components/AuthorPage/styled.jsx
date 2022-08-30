import styled from "styled-components";
import { Avatar } from "../shared";
import { Icon } from "../shared";

export const AuthorContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    padding: 10%;
    grid-template-rows: 25% 75%;
    grid-template-areas: "avatar info"
    "bio bio";
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.mono200};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
`
export const BaseInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: info;

    h3{
        color:  ${({ theme }) => theme.colors.mono500};
        font-size: ${({ theme }) => theme.font.sizes.m};
        padding-bottom: .5rem;
    }

    p{
        color:  ${({ theme }) => theme.colors.mono400};
        font-size: ${({ theme }) => theme.font.sizes.xs};
    }

    div{
        height: 10%;
        background-color: transparent;
        width: 60%;
    }
`
export const GridAvatar = styled(Avatar)`
    grid-area: avatar;
    justify-self: center;
`
export const Bio = styled.div`
    grid-area: bio;
    text-align: center;
    flex-wrap: wrap;

    p{
        color:  ${({ theme }) => theme.colors.mono500};
        font-size: ${({ theme }) => theme.font.sizes.m};
    }
`
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const ViewContainer = styled.div`
    display: grid;
    width: 95%;
    height: 100%;
    margin-top: 2rem;
    grid-template-columns: 48% 48%;
    column-gap: 4%;
`