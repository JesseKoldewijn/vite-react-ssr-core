export const getGlobalObject = (
  // We use the filename as key; each `getGlobalObject()` call should live in a unique filename.
  key: string,
  defaultValue: any
) => {
  // @ts-expect-error
  const allGlobalObjects = (globalThis.__vite_plugin_ssr =
    // @ts-expect-error
    globalThis.__vite_plugin_ssr || {});
  const globalObject = (allGlobalObjects[key] = allGlobalObjects[key] || defaultValue);
  return globalObject;
};
