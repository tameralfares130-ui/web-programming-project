function showCalculator() {
  document.getElementById("app").innerHTML = `
    <h2>Calculator</h2>
    <input id="a" type="number" placeholder="First number">
    <input id="b" type="number" placeholder="Second number">
    <button onclick="calculate()">Add</button>
    <p id="result"></p>
  `;
}

function calculate() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("result").innerText = "Result: " + (a + b);
}

function showGame() {
  document.getElementById("app").innerHTML = `
    <h2>Guessing Game</h2>
    <p>Guess a number between 1 and 10.</p>
    <input id="guess" type="number">
    <button onclick="checkGuess()">Check</button>
    <p id="gameResult"></p>
  `;
}

function checkGuess() {
  const secret = 5;
  const guess = Number(document.getElementById("guess").value);

  if (guess === secret) {
    document.getElementById("gameResult").innerText = "Correct!";
  } else {
    document.getElementById("gameResult").innerText = "Try again!";
  }
}

showCalculator();