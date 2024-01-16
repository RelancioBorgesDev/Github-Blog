import { ArrowSquareOut } from "phosphor-react";
import { LinkContainer } from "./style";

interface ILinkProps {
  text: string;
  link: string;
}

export default function Link({ text, link }: ILinkProps) {
  return (
    <LinkContainer>
      <a href={link}>
        {text}
        <ArrowSquareOut size={24} />
      </a>
    </LinkContainer>
  );
}
