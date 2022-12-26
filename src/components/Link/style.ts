import styled from 'styled-components';

export const LinkContainer = styled.div`
    color: ${({theme}) => theme.colors.blue};
    a{
        font-weight: 700;
        font-size: ${({theme})=> theme.textSizes['components-link']};
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`;
