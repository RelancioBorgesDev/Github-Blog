import { ArrowSquareOut } from "phosphor-react";
import { LinkContainer } from "./style";

interface ILinkProps {
  text: string;
}

export default function Link({ text }: ILinkProps) {
  return (
    <LinkContainer>
      <a href='#'>
        {text}
        <ArrowSquareOut size={24} />
      </a>
    </LinkContainer>
  );
}
