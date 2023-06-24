export const isEmptyObj = (obj: any) => {
  return JSON.stringify(obj) === "{}" || obj === null || obj === undefined;
};
