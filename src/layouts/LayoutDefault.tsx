import { Suspense } from "react";

import { Link } from "~/components/framework/Link";
import { ThemeProvider } from "~/providers/theme-provider";
import "~/styles/fonts.css";
import "~/styles/tailwind.css";

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <ThemeProvider>
        <div className="font-sans">
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
          </div>
          {children}
        </div>
      </ThemeProvider>
    </Suspense>
  );
};

export default LayoutDefault;
