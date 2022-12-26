import styled from 'styled-components';
import cover from '../../assets/Cover.jpg'

export const Container = styled.div`
  position: relative;
`;

export const ContainerProfile = styled.div`
    position: absolute;
    width: 54rem;
    height: 13.25rem;
    background-color: ${({theme}) => theme.colors['base-profile']};
    left: calc(50% - 864px/2);
    top: 208px;

    display: grid;
    grid-template-areas: 
    "image content content" 
    ;
    align-items: center;
    justify-items: center;
    padding: 2rem;
    gap: 2rem;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
    
`
export const ProfileImage = styled.img`
  grid-area: image;
  margin-left: .5rem;

`

export const ProfileContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  
  gap: .5rem;

`
export const ProfileHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${({theme})=> theme.colors['base-title']};
    font-size: ${({theme})=> theme.textSizes['title-title-l']};
  }
  
`

export const ProfileBio = styled.p`
  color: ${({theme}) => theme.colors['base-text']};
  font-size: ${({theme}) => theme.textSizes['text-text-m']};
`

export const ProfileSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`