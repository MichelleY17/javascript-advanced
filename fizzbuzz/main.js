const N = 15;
const fizz = 3;
const buzz = 5;

const fizzbuzzContainer = document.getElementById('fizzbuzz-box');
const btn = document.getElementById('btn');

for(let i = 1; i <= N; i++) {
    let output = "";
    if (i % fizz === 0 && i % buzz === 0) {
        output = "FizzBuzz";
    } else if (i % fizz === 0) {
        output = "Fizz";
    } else if (i % buzz === 0) {
        output = "Buzz";
    } else {
        output = i;
    }
    const outputElement = document.createElement('div');
    outputElement.textContent = output;
    fizzbuzzContainer.appendChild(outputElement);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  fizzbuzzContainer.style.backgroundColor = getRandomColor();
}

btn.addEventListener('click', changeBackgroundColor);




