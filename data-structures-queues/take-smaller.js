/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') return undefined;
  const original = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return original;
  const second = queue.dequeue();
  if (original <= second) {
    queue.enqueue(second);
    return original;
  } else {
    queue.enqueue(original);
    return second;
  }
}
