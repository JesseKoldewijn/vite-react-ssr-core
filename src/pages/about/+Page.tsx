import LinkButton from "~/components/ui/buttons/link";

const Page = () => {
  return (
    <>
      <h1 className="pb-4 text-3xl font-bold">About</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
      </ul>
      <LinkButton />
    </>
  );
};
export default Page;
