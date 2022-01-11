/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const lastvalue = stack.peek();
  if (typeof lastvalue === 'undefined') {
    return undefined;
  }
  const result = stack.peek(stack.pop());
  stack.push(lastvalue);
  return result;
}
