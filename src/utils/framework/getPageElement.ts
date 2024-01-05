import React from "react";

import { PageContextProvider } from "~/providers/PageContextProvider";

export const getPageElement = (pageContext: any) => {
  const Layout = pageContext.config.Layout ?? PassThrough;
  const Wrapper =
    /* Should we implement this? Enabling users to defined a wrapper that is used across all layouts.
    pageContext.config.Wrapper ??
    */
    PassThrough;
  const VikeReactQueryWrapper = pageContext.config.VikeReactQueryWrapper ?? PassThrough;
  // TODO/next-major-release: remove pageProps (i.e. tell users to use data() instead of onBeforeRender() to fetch data)
  const { Page, pageProps } = pageContext;
  const page = React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      PageContextProvider,
      // @ts-expect-error
      { pageContext: pageContext },
      React.createElement(
        VikeReactQueryWrapper,
        { pageContext: pageContext },
        React.createElement(
          Wrapper,
          null,
          React.createElement(
            Layout,
            null,
            Page ? React.createElement(Page, { ...pageProps }) : null
          )
        )
      )
    )
  );
  return page;
};

function PassThrough({ children }: { children: React.ReactNode }) {
  return React.createElement(React.Fragment, null, children);
}
