import { IPost } from "../../../../contexts/IssuesDataContext";
import { relativeDateFormatter } from "../../../../utils/formatDate";
import { CardBriefText, CardHeader, Container } from "./style";

interface PostCardProps {
  title: string;
  body: string;
  created_at: string;
}

export default function PostCard({ title, body, created_at }: PostCardProps) {
  const formatedDate = relativeDateFormatter(created_at);
  return (
    <Container>
      <CardHeader>
        <h2>{title}</h2>
        <span>{formatedDate}</span>
      </CardHeader>
      <CardBriefText>
        <p>{body}</p>
      </CardBriefText>
    </Container>
  );
}
