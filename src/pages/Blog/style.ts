import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: 14rem;
   gap: 3.75rem;
`;


export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`