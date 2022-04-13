import styled from 'styled-components';
import profile from './../../assets/profile.jpg'

export const ProfileImage = styled.div`
  width: 149px;
  height: 149px;
  border-radius: 50%;
  background-image: url(${profile});
  background-size: cover;
  background-position: center;
`

export const Wrapper = styled.div`
padding: 0px 20px;
  background-color: ${({ theme }) => theme.grey};
  position: relative;
  box-shadow: 0 20px 0px 0px white inset;

  p {
    text-align: center;
    padding-bottom: 20px;
  }
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 0px 20px 0px;

  h1 {
    font-size: 28px;
    text-align: center;
    margin-top: 20px
  }
`