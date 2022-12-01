export function getObjectTruthyValues(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key]) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
