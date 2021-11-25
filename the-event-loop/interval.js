let currentCount = 3;

const count = () => {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(count, 1000);
