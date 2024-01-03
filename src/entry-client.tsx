import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * This code is rendering the root component of the React application.
 * Using createRoot instead of hydrateRoot to prevent hydration mismatches.
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Suspense>
			<App />
		</Suspense>
	</React.StrictMode>
);
