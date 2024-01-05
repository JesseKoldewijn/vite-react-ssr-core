const appName = "vite-rsc-core";
const themeStorageKey = `ui-theme-${appName.trim().toLowerCase().replaceAll(" ", "-")}`;

const appConfig = {
  appName: appName,
  themeStorageKey: themeStorageKey,
};

export default appConfig;
