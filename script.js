const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const history = document.querySelector(".history");
const allClearBtn = document.querySelector("#all-clear");
const clearBtn = document.querySelector("#clear");

// todo: add class with two display fields

class Calculator {
  constructor(historyElement, resultElement) {
    this.historyElement = historyElement;
    this.resultElement = resultElement;
    this.allClear();
  }

  allClear() {
    this.history = "";
    this.result = "";
    this.operation = undefined;
  }

  clear() {}

  appendNumber(number) {
    this.result = this.result.toString() + number.toString();
  }

  selectOperation() {}

  compute() {}

  updateDisplay() {
    this.resultElement.innerText = this.result;
  }
}

const calculator = new Calculator(history, result);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number.innerText);
    calculator.updateDisplay();
  });
});
