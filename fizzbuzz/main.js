const N = 15;
const fizz = 3;
const buzz = 5;

const fizzbuzzContainer = document.getElementById('fizzbuzz-container');

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



