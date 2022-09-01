import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
  height: 85vh; //zmień jak będzie searchbar i side
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  gap: 1.6rem;

  h3{
    justify-self: center;
    align-self: center;
  }
`;

export const MainPage = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  user-select: none;

  div, span{
    padding: .5rem;
  }

  div:hover{
    font-weight: bolder;
    cursor: pointer;
  }
`
