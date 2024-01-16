import { FormContainer, FormHeader, FormInput } from "./style";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IPost } from "../../../../contexts/IssuesDataContext";

const searchFormSchema = z.object({
  query: z.string(),
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  amount_posts: number;
  getPosts: (query?: string) => Promise<void>;
}
export default function SearchForm({
  amount_posts,
  getPosts,
}: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    try {
      await getPosts(data.query);
    } catch {
      console.log("Error");
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <FormHeader>
        <h2>Publicações</h2>
        <span>{amount_posts} publicações</span>
      </FormHeader>
      <FormInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </FormContainer>
  );
}
