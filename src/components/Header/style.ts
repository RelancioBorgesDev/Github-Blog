import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ContainerBGImage =styled.img`
 width: 100%;
`

export const ContainerProfile = styled.div`
    position: absolute;
    width: 54rem;
    height: 13.25rem;
    background-color: ${({theme}) => theme.colors['base-profile']};
    left: calc(50% - 864px/2);
    top: 208px;

    

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
    
`