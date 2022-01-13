/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return;
  }
  const result = list.next.next;
  list.next = result;
}
