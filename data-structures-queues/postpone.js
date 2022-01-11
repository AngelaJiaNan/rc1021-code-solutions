/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const frontvalue = queue.dequeue();
  return queue.enqueue(frontvalue);
}
