import FontsDefault from "./FontsDefault";
import PWA_Default from "./PWA_Default";

// Default <head> (can be overridden by pages)
export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#151515" />
      <FontsDefault />
      <PWA_Default />
    </>
  );
}
