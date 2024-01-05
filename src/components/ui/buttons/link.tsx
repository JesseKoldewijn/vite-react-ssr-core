import { Link } from "~/components/framework/Link";

type LinkButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const LinkButton = ({ children, href, ...rest }: LinkButtonProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
