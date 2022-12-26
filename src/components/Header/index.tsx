import { ReactNode } from "react";
import { Container, ContainerBGImage, ContainerProfile } from "./style";
import Cover from "../../assets/Cover.jpg";

interface IHeaderProps {
  children: ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <Container>
      <ContainerBGImage src={Cover} alt='Imagem de fundo' />
      <ContainerProfile>{children}</ContainerProfile>
    </Container>
  );
}
