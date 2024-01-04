import React from "react";
import { PageContextProvider } from "~/hooks/usePageContext";
import "~/styles/global.css";

import { PageContext } from "vike/types";

type PageShellProps = {
  children: React.ReactNode;
  pageContext: PageContext;
};

export const PageShell = ({ children, pageContext }: PageShellProps) => {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  );
};
