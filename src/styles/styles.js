import styled from '@emotion/styled'

export const HeaderStyle = styled.header`
    background-color: #dc7882;
    padding: 30px 0 20px 0;
    padding-left: 100px;
    a{
      color: #E8F1F5;
      text-decoration: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }
  `

export const ContainerStyle = styled.div`
    width: 1500px;
    margin: 0 auto;
  `

export const PostContentStyle = styled.div`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  `

export const PostStyle = styled.div`
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  padding: 30px 80px;
  min-height: 100vh;
  width: 800px;
  border-radius: 40px;
  h2{
    font-family: "Times New Roman", sans-serif;
    font-size: 46px;
    font-weight: 200;
  }
`

export const AvatarStyle = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `

export const PostInformationStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 20px;
  p{
    font-size: 17px;
    color: #7C7575;
  }
`

