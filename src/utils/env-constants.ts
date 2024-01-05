export const isServer = import.meta.env.SSR === true;
export const isClient = !isServer;
