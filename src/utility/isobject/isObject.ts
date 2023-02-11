const isObject = (item: unknown) =>
  Boolean(item) && typeof item === 'object' && !Array.isArray(item);

export default isObject;
