/**
 * The function `isServer` returns whether the code is running on the server or not.
 */
export const isServer = () => import.meta.env.SSR;

/**
 * The function `isClient` returns `true` if the code is running on the client-side and `false` if it
 * is running on the server-side.
 */
export const isClient = () => !import.meta.env.SSR;
