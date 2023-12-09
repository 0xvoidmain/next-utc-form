export const parseObject = (object: any) => {
  const res: any = {};
  Object.keys(object).forEach((key) => {
    if (Array.isArray(object[key])) {
      res[key] = object[key].join(', ');
    } else {
      res[key] = object[key];
    }
  });
  return res;
};
