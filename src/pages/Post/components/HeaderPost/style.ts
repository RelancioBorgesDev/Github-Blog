import styled from 'styled-components';


export const HeaderPostContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    h2 {
        margin-top: 1.25rem;
    }
`

export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

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