import styled from 'styled-components'

export const MyPageProfileContainer = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:768px){
    width: 100%;
  }
  @media screen and (min-width:768px){
    width: 100%;
  }
`
export const MyPageProfileImgContainer = styled.div`
  width: 400px;
  height: 500px;
`
export const MyPageProfileImgBox = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`
export const MyPageGoSurvey = styled.span`
  cursor: pointer;
`
export const MyPageProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:50%;
`

export const MyPageProfileBodyContainer = styled.div`
  width: 400px;
  height: 500px;
  text-align: center;
  p {
    font-size: 25px;
    font-weight: 400;
    font-style: normal;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
  }
`

export const MyPageContentCommentContainer = styled.div`
  width: 50%;
  height: 500px;
`

export const MyPageContentMusicContainer = styled.div`
  width: 50%;
  height: 500px;
`
