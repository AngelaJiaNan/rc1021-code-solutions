/* exported isEmpty */

function isEmpty(stack) {
  const value = stack.peek();
  let result = false;
  if (value === undefined) {
    result = true;
  }
  return result;
}
