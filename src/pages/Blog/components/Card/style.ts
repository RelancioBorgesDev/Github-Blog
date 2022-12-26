import styled from 'styled-components';

export const Container = styled.div`
    width: 26rem;
    background-color: ${({theme}) => theme.colors['base-post']};
    border-radius: 0.625rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.25rem;
    cursor: pointer;
`;


export const CardHeader = styled.div`
    display: grid;
    grid-template-areas: 
    "title title date"
    ;
    grid-gap: 1rem;
    h2{
        grid-area: title;
        color: ${({theme}) => theme.colors['base-title']};
        font-size: ${({theme}) => theme.textSizes['title-title-m']};
        font-weight: 700;
    }

    span{
        grid-area: date;
        color: ${({theme}) => theme.colors['base-span']};
        font-size: ${({theme}) => theme.textSizes['text-text-s']};
        font-weight: 400;
    }
`

export const CardBriefText = styled.div`
    p{
        color: ${({theme}) => theme.colors['base-text']};
        font-size: ${({theme}) => theme.textSizes['text-text-m']};
        font-weight: 400;
    }

`