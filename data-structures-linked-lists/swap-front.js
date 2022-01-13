/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const frist = list;
  const second = list.next;
  const rest = list.next.next;
  list = second;
  list.next = frist;
  list.next.next = rest;
  return list;
}
