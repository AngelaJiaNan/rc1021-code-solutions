/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let result = list;
  while (result.next) {
    result = result.next;
  }
  result.next = new LinkedList(value);
}
