import { Buildings, GithubLogo, Users } from "phosphor-react";
import { ElementType, ReactNode } from "react";
import { LinkContainer } from "./style";

interface ISocialsLinkProps {
  icon: ElementType;
  children: ReactNode;
}

export default function SocialsLink({
  icon: Icon,
  children,
}: ISocialsLinkProps) {
  return (
    <LinkContainer href="">
      <span>
        <Icon />
      </span>
      {children}
    </LinkContainer>
  );
}
