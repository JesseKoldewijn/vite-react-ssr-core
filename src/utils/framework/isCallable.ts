export const isCallable = (thing: any) => {
  return thing instanceof Function || typeof thing === "function";
};
