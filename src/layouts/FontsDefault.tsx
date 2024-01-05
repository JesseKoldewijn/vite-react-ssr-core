import { isServer } from "~/utils/env-constants";

const clientSupportsWoff2 = () => {
  if (isServer) return true;
  if (window.FontFace) {
    const font = new window.FontFace("t", 'url(https://) format("woff2")');
    font.load();
    return font.status === "loading";
  }
  return false;
};

const FontsDefault = () => {
  const supportsWoff2 = clientSupportsWoff2();

  const woffRel = supportsWoff2 ? "preload" : "prefetch";
  const nonWoffRel = !supportsWoff2 ? "preload" : "prefetch";

  return (
    <>
      <link
        rel={woffRel}
        href="/fonts/Geist/GeistVariableVF.woff2"
        type="font/woff2"
        as="font"
        crossOrigin="anonymous"
        suppressHydrationWarning
      />
      <link
        rel={nonWoffRel}
        href="/fonts/Geist/GeistVariableVF.ttf"
        type="font/ttf"
        as="font"
        crossOrigin="anonymous"
        suppressHydrationWarning
      />
      <link
        rel={woffRel}
        href="/fonts/Geist/Geist-Regular.woff2"
        type="font/woff2"
        as="font"
        crossOrigin="anonymous"
        suppressHydrationWarning
      />
      <link
        rel={nonWoffRel}
        href="/fonts/Geist/Geist-Regular.otf"
        type="font/otf"
        as="font"
        crossOrigin="anonymous"
        suppressHydrationWarning
      />
    </>
  );
};

export default FontsDefault;
