module.exports = function getPositiveKeysOfBoolset(boolset) {
  const array = boolset;
  const odd  = array.filter((v, i) => i % 2)
  return array.filter((v, i) => !(i % 2)).filter((item, i) => odd[i]);
}
