export default function appendToEachArrayValue(array, appendString) {
  const result = array;

  for (const [idx, value] of array.entries()) {
    result[idx] = appendString + value;
  }

  return result;
}
