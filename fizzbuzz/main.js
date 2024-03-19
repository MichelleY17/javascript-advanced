const fizzbuzzContainer = document.getElementById('fizzbuzz-box');
const btn = document.getElementById('btn');
const btnReturn= document.getElementById('btn-return');
const gameRulesContainer = document.querySelector('.game-rules');

btn.addEventListener('click', ()=> {
  gameRulesContainer.style.display = 'none';
  fizzbuzzContainer.style.display = 'grid';
  const fizzWorld= document.querySelector('input[name="fizz-name"]').value;
  const buzzWorld= document.querySelector('input[name="buzz-name"]').value;
  const maxNumber = parseInt(document.querySelector('input[name="number-max"]').value);
  const n1 = parseInt(document.querySelector('input[name="number-fizz"]').value);
  const n2 = parseInt(document.querySelector('input[name="number-buzz"]').value);
  const fizzBuzzResults = fizzBuzzFunction(maxNumber, n1, n2, fizzWorld, buzzWorld);
  displayFizzBuzzResults(fizzBuzzResults);
});
btnReturn.addEventListener('click', ()=>{
  gameRulesContainer.style.display = 'block';
  fizzbuzzContainer.style.display = 'none';
});

const fizzBuzzFunction = (maxNumber, n1, n2, fizzWord , buzzWord ) => {
  const output = [];
  for (let i = 1; i <= maxNumber; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      output.push(fizzWord + buzzWord);
    } else if (i % n1 === 0) {
      output.push(fizzWord);
    } else if (i % n2 === 0) {
      output.push(buzzWord);
    } else {
      output.push(i);
    }
  }
  return output;
};

const displayFizzBuzzResults = (results) => {
  const fizzbuzzContainer = document.getElementById('fizzbuzz-box');  
  results.forEach((result) => {
    const div = document.createElement('div');
    div.textContent = result;
    fizzbuzzContainer.appendChild(div);
  });
};

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





