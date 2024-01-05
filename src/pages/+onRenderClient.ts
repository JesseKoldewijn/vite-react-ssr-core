// https://vike.dev/onRenderClient
import ReactDOM from "react-dom/client";

import { getPageElement } from "~/utils/framework/getPageElement.js";
import { getTitle } from "~/utils/framework/getTitle.js";

let root: ReactDOM.Root;

export const onRenderClient = async (pageContext: any) => {
  const page = getPageElement(pageContext);
  const container = document.getElementById("page-view");

  if (!container) {
    throw new Error("Missing #page-view element");
  }

  if (container.innerHTML !== "" && pageContext.isHydration) {
    // Hydration
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      // First rendering
      root = ReactDOM.createRoot(container);
    } else {
      // Client routing
      // See https://vike.dev/server-routing-vs-client-routing
      // Get the page's `title` config value, which may be different from the
      // previous page. It can even be null, in which case we should unset the
      // document title.
      const title = getTitle(pageContext);
      document.title = title || "";
    }
    root.render(page);
  }
};
