import React, { createContext, useContext } from "react";

import { getGlobalObject } from "~/utils/framework/getGlobalObject.js";

export { PageContextProvider };
export { usePageContext };
export { useData };

const { Context } = getGlobalObject("PageContextProvider.ts", {
  Context: createContext(undefined),
});

type PageContextProviderProps = {
  pageContext: any;
  children: React.ReactNode;
};

const PageContextProvider = ({ pageContext, children }: PageContextProviderProps) => {
  if (!pageContext) throw new Error("Argument pageContext missing");
  return React.createElement(Context.Provider, { value: pageContext }, children);
};

/** Access the pageContext from any React component */
const usePageContext = () => {
  const pageContext = useContext(Context);
  if (!pageContext)
    throw new Error("<PageContextProvider> is needed for being able to use usePageContext()");
  return pageContext;
};

const useData = () => {
  // @ts-expect-error
  const { data } = usePageContext();
  return data;
};
