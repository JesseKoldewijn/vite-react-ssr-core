import React from "react";

import { Link } from "~/components/framework/Link";
import { ThemeProvider } from "~/providers/theme-provider";
import "~/styles/tailwind.css";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className="font-sans">
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};
export default LayoutDefault;
