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

  div{
    padding: .5rem;
  }
`
