import { Link } from "~/components/framework/Link";

export const Page = () => {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <Link href="/about">Link to about page</Link>
      </ul>
    </>
  );
};
