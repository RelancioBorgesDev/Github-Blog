import { FormContainer, FormHeader, FormInput } from './style'

export default function SearchForm() {
  return (
    <FormContainer>
        <FormHeader>
            <h2>Publicações</h2>
            <span>6 publicações</span>
        </FormHeader>
        <FormInput type="text" placeholder='Buscar conteúdo' />
    </FormContainer>
  )
}
