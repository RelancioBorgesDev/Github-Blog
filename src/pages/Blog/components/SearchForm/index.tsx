import { FormContainer, FormHeader, FormInput } from "./style";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export default function SearchForm() {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function retornaQuery(data: SearchFormInputs) {
    console.log(data);

    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(retornaQuery)}>
      <FormHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </FormHeader>
      <FormInput
        type='text'
        placeholder='Buscar conteúdo'
        {...register("query")}
      />
    </FormContainer>
  );
}
