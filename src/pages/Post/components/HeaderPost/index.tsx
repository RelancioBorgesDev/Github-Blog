import SocialsLink from "../../../../components/SocialsLink";
import { ProfileSocials } from "../../../Blog/components/HeaderProfile/style";
import { HeaderPostContainer, LinkContainer, PostHeader } from "./style";
import Link from "../../../../components/Link";
import { ArrowLeft, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { IPost } from "../../../../contexts/IssuesDataContext";
import { relativeDateFormatter } from "../../../../utils/formatDate";
import { useParams } from "react-router-dom";

export default function HeaderPost({ postData }: { postData: IPost }) {
  const formatedDate = relativeDateFormatter(postData.created_at);
  const { id } = useParams();
  return (
    <HeaderPostContainer>
      <PostHeader>
        <LinkContainer>
          <a href="/">
            <ArrowLeft size={24} />
            VOLTAR
          </a>
        </LinkContainer>
        <Link
          text="VER NO GITHUB"
          link={`https://github.com/RelancioBorgesDev/IssuesExample_GithubBlog/issues/${id}`}
        />
      </PostHeader>
      <h2>{postData.title}</h2>
      <ProfileSocials>
        <SocialsLink icon={GithubLogo}>{postData.user?.login}</SocialsLink>
        <SocialsLink icon={Calendar}>{formatedDate}</SocialsLink>
        <SocialsLink icon={ChatCircle}>
          {postData.comments} comentários
        </SocialsLink>
      </ProfileSocials>
    </HeaderPostContainer>
  );
}
