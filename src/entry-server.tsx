import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

/**
 * This code is rendering the root component of the React application.
 * Rendering to string due to this render function being used for server-side rendering.
 */
export const render = () => {
	const html = ReactDOMServer.renderToString(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
	return { html };
};
