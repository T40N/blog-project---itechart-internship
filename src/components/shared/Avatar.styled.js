import styled from "styled-components";

const Avatar = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  /* background-image: url('https://firebasestorage.googleapis.com/v0/b/test-project-96eaa.appspot.com/o/avatars%2Fdefault.png?alt=media&token=adaa2a76-3cb1-44f3-9c0b-93c888758536'); */
  background-image: ${({ link }) => `url(${link})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  width: 6.25rem;



  &::before {
      content: "";
      position: absolute;
      border: .3rem solid ${({ theme }) => theme.colors.mono500};
      border-radius: 50%;
      width: 7.5rem;
      aspect-ratio: 1/1;
      top: -50%;
      left: -50%;
      margin-left: 2.5rem;
      margin-top: 2.5rem;
      box-sizing: border-box;
      display: ${({ isInSidebar }) => isInSidebar ? 'block' : 'none'}
    }

  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.mono500};
    border: .3rem solid ${({ theme }) => theme.colors.mono200};
    aspect-ratio: 1/1;
    height: 0.75rem;
    top: 96%;
    left: 38%;
  }
`;

export default Avatar;
