import { Buildings, GithubLogo, Users } from "phosphor-react";
import { ReactNode } from "react";
import { LinkContainer } from "./style";

interface ISocialsLinkProps {
  iconType: string;
  children: ReactNode;
}

export default function SocialsLink({ iconType, children }: ISocialsLinkProps) {
 
  function retornaIcone() {
    switch (iconType) {
      case "login":
        return <GithubLogo size={24}/>;
      case "company":
        return <Buildings size={24}/>;
      case "followers":
        return <Users size={24}/>;
    }
  }
  let icon = retornaIcone();
  return (
    <LinkContainer href=''>
      <span>{icon}</span>
      {children}
    </LinkContainer>
  );
}
