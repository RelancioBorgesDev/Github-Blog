import Link from "../../../../components/Link";
import SocialsLink from "../../../../components/SocialsLink";
import {
  Container,
  ProfileBio,
  ProfileContent,
  ProfileHeader,
  ProfileImage,
  ProfileSocials,
} from "./style";
import { Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileData } from "../../../../contexts/ProfileDataContext";

export default function HeaderProfile({
  avatar_url,
  login,
  company,
  name,
  bio,
  followers,
}: ProfileData) {
  return (
    <Container>
      <ProfileImage src={avatar_url} />
      <ProfileContent>
        <ProfileHeader>
          <h2>{name}</h2>
          <Link text="GITHUB" link="https://github.com/RelancioBorgesDev" />
        </ProfileHeader>
        <ProfileBio>{bio}</ProfileBio>
        <ProfileSocials>
          <SocialsLink icon={GithubLogo}>{login}</SocialsLink>
          {company && <SocialsLink icon={Buildings}>{company}</SocialsLink>}
          <SocialsLink icon={Users}>{followers} seguidores</SocialsLink>
        </ProfileSocials>
      </ProfileContent>
    </Container>
  );
}
