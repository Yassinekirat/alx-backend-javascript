export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const setRet = [...set]
    .filter((s) => typeof s === 'string' && s.startsWith(startString))
    .map((s) => s.slice(startString.length));

  return setRet.join('-');
}
