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
import avatar from "../../../../assets/avatar.png";

export default function HeaderBlog() {
  return (
    <Container>
      <ProfileImage src={avatar} />
      <ProfileContent>
        <ProfileHeader>
          <h2>Nome do usuário</h2>
          <Link text='GITHUB' />
        </ProfileHeader>
        <ProfileBio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          consequatur in expedita illum, incidunt possimus inventore totam nulla
          unde debitis sequi, eveniet, et quasi adipisci qui reprehenderit eaque
          ea quisquam.
        </ProfileBio>
        <ProfileSocials>
          <SocialsLink iconType='login'>cameronwwl</SocialsLink>
          <SocialsLink iconType='company'>Rocketseat</SocialsLink>
          <SocialsLink iconType='followers'>32 seguidores</SocialsLink>
        </ProfileSocials>
      </ProfileContent>
    </Container>
  );
}
