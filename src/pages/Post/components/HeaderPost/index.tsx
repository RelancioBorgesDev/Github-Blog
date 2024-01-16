import SocialsLink from "../../../../components/SocialsLink";
import { ProfileSocials } from "../../../Blog/components/HeaderProfile/style";
import { HeaderPostContainer, LinkContainer, PostHeader } from "./style";
import Link from "../../../../components/Link";
import { ArrowLeft, Calendar, ChatCircle, GithubLogo } from "phosphor-react";

export default function HeaderPost() {
  return (
    <HeaderPostContainer>
      <PostHeader>
        <LinkContainer>
          <a href="/">
            <ArrowLeft size={24} />
            VOLTAR
          </a>
        </LinkContainer>
        <Link text="VER NO GITHUB" />
      </PostHeader>
      <h2>JavaScript data types and data structures</h2>
      <ProfileSocials>
        <SocialsLink icon={GithubLogo}>cameronwwl</SocialsLink>
        <SocialsLink icon={Calendar}>Há 1 dia</SocialsLink>
        <SocialsLink icon={ChatCircle}>5 comentários</SocialsLink>
      </ProfileSocials>
    </HeaderPostContainer>
  );
}
