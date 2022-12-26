import SocialsLink from "../../../../components/SocialsLink";
import { ProfileSocials } from "../../../Blog/components/HeaderBlog/style";
import { HeaderPostContainer, LinkContainer, PostHeader } from "./style";
import Link from '../../../../components/Link'
import { ArrowLeft } from "phosphor-react";

export default function HeaderPost() {
  return (
    <HeaderPostContainer>
      <PostHeader>
        <LinkContainer>
          <a href='#'>
            <ArrowLeft size={24} />
            VOLTAR
          </a>
        </LinkContainer>
        <Link text="VER NO GITHUB"/>
      </PostHeader>
      <h2>JavaScript data types and data structures</h2>
      <ProfileSocials>
        <SocialsLink iconType='login'>cameronwwl</SocialsLink>
        <SocialsLink iconType='company'>Rocketseat</SocialsLink>
        <SocialsLink iconType='followers'>32 seguidores</SocialsLink>
      </ProfileSocials>
    </HeaderPostContainer>
  );
}
