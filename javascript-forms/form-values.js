var contactForm = document.querySelector('#contact-form');
var form = document.forms[0];

contactForm.addEventListener('submit', noDefault);

function noDefault(event) {
  event.preventDefault();
  var object = {};
  object.user = form.elements[0].value;
  object.email = form.elements[1].value;
  object.message = form.elements[2].value;
  console.log(object);
  form.reset();
}
