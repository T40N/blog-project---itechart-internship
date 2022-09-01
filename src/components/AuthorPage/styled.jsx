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

    @media (max-width: 1250px){
        &{
            grid-template-columns: auto auto;
            grid-template-rows: 8rem min-content;
            padding-block: 3rem;
            row-gap: 2rem;
        }
    }
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
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        &{
            display: grid;
            grid-template-columns: max-content 25% max-content;
            grid-template-rows: 50% 50%;
            grid-template-areas: "name space type"
            "date space postNumber";

            #name{
                grid-area: name;
            }

            #date{
                grid-area: date;
            }

            #type{
                grid-area: type;
            }

            #postNumber{
                grid-area: postNumber;
            }

            div{
                height: auto;
                width: auto;
                grid-area: space;
            }

            @media (max-width: 750px){ 
                grid-template-columns: min-content 25% max-content;
            }
        }
    }
`
export const GridAvatar = styled(Avatar)`
    grid-area: avatar;
    justify-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        &{
            transform: scale(0.7);
        }
    }
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
    cursor: pointer;
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

    @media (max-width: 1250px) and (min-width: ${({ theme }) => theme.breakpoints.medium}){
        &{
            grid-template-columns: 90% 10%;
            grid-template-rows: 50% 50%;
            grid-template-areas: "title go"
            "date go";

            p{
                margin-left: 1.1rem;
            }
        }
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
    margin-bottom: 2rem;

    @media (max-width:  ${({ theme }) => theme.breakpoints.medium}){
        &{
            grid-template-columns: 100%;
            grid-template-rows: min-content auto;
            row-gap: 2rem;
        }
    }
`