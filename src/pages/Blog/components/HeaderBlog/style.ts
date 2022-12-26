import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
    grid-template-areas: 
    "image content content" 
    ;
    align-items: center;
    justify-items: center;
    padding: 2rem;
    gap: 2rem;

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
  margin-top: 1rem;
`