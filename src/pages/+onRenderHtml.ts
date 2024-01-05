import React, { createElement } from "react";
import { renderToString } from "react-dom/server";
import { renderToStream } from "react-streaming/server";

import { dangerouslySkipEscape, escapeInject } from "vike/server";

import appConfig from "~/config/app";
import { PageContextProvider } from "~/providers/PageContextProvider";
import { getPageElement } from "~/utils/framework/getPageElement.js";
import { getTitle } from "~/utils/framework/getTitle.js";

// https://vike.dev/onRenderHtml

export const onRenderHtml = async (pageContext: any) => {
  const lang = pageContext.config.lang || "en";
  const { stream, favicon, description } = pageContext.config;
  const faviconTag = !favicon ? "" : escapeInject`<link rel="icon" href="${favicon}" />`;
  const descriptionTag =
    !description ? "" : escapeInject`<meta name="description" content="${description}" />`;
  const title = getTitle(pageContext);
  const titleTag = !title ? "" : escapeInject`<title>${title}</title>`;

  const Head = pageContext.config.Head || (() => createElement(React.Fragment, null));

  const head = createElement(
    React.StrictMode,
    null,
    React.createElement(
      PageContextProvider,
      // @ts-expect-error
      { pageContext: pageContext },
      React.createElement(Head, null)
    )
  );
  const headHtml = dangerouslySkipEscape(renderToString(head));
  let pageView;
  if (!pageContext.Page) {
    pageView = "";
  } else {
    const page = getPageElement(pageContext);
    pageView =
      !stream ?
        dangerouslySkipEscape(renderToString(page))
      : await renderToStream(page, { userAgent: pageContext.userAgent });
  }

  const cookies = pageContext.req.headers.get("cookie");

  const themeCookie =
    cookies ?
      cookies.split(";").map((x: string) => {
        const kv = x.split("=");
        return { theme: kv[1] };
      })[0].theme
    : null;

  const themeCookieValue = themeCookie ?? "system";

  const theme = themeCookieValue || "system";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang='${lang}' class='${theme}'>
      <head>
        <meta charset="UTF-8" />
        ${faviconTag}
        ${titleTag}
        ${descriptionTag}
        ${headHtml}
      </head>
      <body>
        <div id="page-view">${pageView}</div>
      </body>
    </html>`;
  return documentHtml;
};
