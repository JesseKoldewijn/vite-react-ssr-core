const FontsDefault = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/Geist/GeistVariableVF.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="prefetch"
        href="/fonts/Geist/GeistVariableVF.ttf"
        as="font"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default FontsDefault;
