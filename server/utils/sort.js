module.exports = (obj) => {
  const sorted = [];
  Object.keys(obj).forEach((key) => {
    sorted.push([key, obj[key]]);
  });
  sorted.sort((a, b) => b[1] - a[1]);
  const k = sorted.map(tuple => tuple[0]);
  const v = sorted.map(tuple => tuple[1]);
  return {
    k,
    v,
  };
};
