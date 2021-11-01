function handleClick(event) {
  console.log(event);
  console.log('button Clicked');
  console.log(event.target);
}

var newButton = document.querySelector('.click-button');

newButton.addEventListener('click', handleClick);
console.log(handleClick);
console.log('click');

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var result = document.querySelector('.hover-button');

result.addEventListener('mouseover', handleMouseover);
console.log('mouseover');
console.log(handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var newButton1 = document.querySelector('.double-click-button');

newButton1.addEventListener('dblclick', handleDoubleClick);
console.log('dblclick');
console.log(handleDoubleClick);
