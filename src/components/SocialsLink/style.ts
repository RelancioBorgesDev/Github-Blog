import styled from 'styled-components';

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: ${({theme})=> theme.colors['base-subtitle']};

 
  span{
    display: flex;
    align-self: center;
    font-size: ${({theme})=> theme.textSizes['text-text-m']};
    font-weight: 400;
    color: ${({theme})=> theme.colors['base-label']};
  }
`;
