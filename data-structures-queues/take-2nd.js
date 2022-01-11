/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const frontvalue = queue.dequeue();
  queue.enqueue(frontvalue);
  return queue.dequeue();
}
