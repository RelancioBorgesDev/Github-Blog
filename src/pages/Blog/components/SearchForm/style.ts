import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 0.188rem;
  z-index: 2;
`;


export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        color: ${({theme})=> theme.colors['base-subtitle']};
        font-weight: 700;
        font-size: ${({theme})=> theme.textSizes['title-title-s']};
    }

    span{
        color: ${({theme})=> theme.colors['base-span']};
        font-weight: 400;
        font-size: ${({theme})=> theme.textSizes['text-text-s']};
    }
`


export const FormInput = styled.input`
    color: ${({theme})=> theme.colors['base-text']};
    font-size: ${({theme})=> theme.textSizes['text-text-m']};
    font-weight: 400;

    background-color: ${({theme})=> theme.colors['base-input']};
    border: 0;
    outline: none;

    padding: 0.75rem 1rem;

    &:active{
        border: 1px solid ${({theme})=> theme.colors['base-border']};
    }


`