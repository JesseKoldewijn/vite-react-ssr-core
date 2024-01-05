import LinkButton from "~/components/ui/buttons/link";

const Page = () => {
  return (
    <>
      <h1 className="pb-4 text-3xl font-bold">About</h1>
      This page is:
      <ul>
        <li className="font-mono">Rendered to HTML.</li>
      </ul>
      <div className="fixed bottom-0 mt-auto flex min-h-16 w-full items-center justify-center bg-black bg-opacity-50 align-middle">
        <LinkButton href="/">Go back!</LinkButton>
      </div>
    </>
  );
};
export default Page;
