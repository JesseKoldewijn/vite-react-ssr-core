// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere
import React, { useContext } from "react";

import type { PageContext } from "vike/types";

const Context = React.createContext<PageContext>(
  undefined as unknown as PageContext,
);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
