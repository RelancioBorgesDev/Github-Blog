import React from "react";
import {
  Container,
  ContainerProfile,
  ProfileBio,
  ProfileContent,
  ProfileHeader,
  ProfileImage,
  ProfileSocials,
} from "./style";
import Cover from "../../assets/Cover.jpg";
import avatar from '../../assets/avatar.png'
import Link from "../Link";
import SocialsLink from "../SocialsLink";
export default function Header() {
  return (
    <Container>
      <img src={Cover} alt='Imagem de fundo' />
      <ContainerProfile>
        <ProfileImage src={avatar}/>
        <ProfileContent>
          <ProfileHeader>
            <h2>Nome do usuário</h2>
            <Link text='GITHUB' />
          </ProfileHeader>
          <ProfileBio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            consequatur in expedita illum, incidunt possimus inventore totam
            nulla unde debitis sequi, eveniet, et quasi adipisci qui
            reprehenderit eaque ea quisquam.
          </ProfileBio>
          <ProfileSocials>
            <SocialsLink iconType="login">cameronwwl</SocialsLink>
            <SocialsLink iconType="company">Rocketseat</SocialsLink>
            <SocialsLink iconType="followers">32 seguidores</SocialsLink>
          </ProfileSocials>
        </ProfileContent>
      </ContainerProfile>
    </Container>
  );
}
