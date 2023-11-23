// genrate a Ramndom Color

const randomColor = function () {
  const hexval = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexval[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeBgColor() {
  (document.body.style.backgroundColor = randomColor()), 2000;
}
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 200);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
