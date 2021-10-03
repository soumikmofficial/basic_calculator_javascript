const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const history = document.querySelector(".history");
const allClearBtn = document.querySelector("#all-clear");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");

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

  clear() {
    let newVal = this.result.toString().slice(0, -1);
    this.result = newVal;
  }

  appendNumber(number) {
    if (number === "." && this.result.includes(".")) return;
    this.result = this.result.toString() + number.toString();
  }

  selectOperation(operator) {
    if (this.result === "") return;
    if (this.history !== "") {
      this.compute();
    }
    this.operation = operator;
    this.history = this.result;
    this.result = "";
  }

  compute() {
    let computation;
    let his = parseFloat(this.history);
    let res = parseFloat(this.result);
    if (isNaN(res) || isNaN(his)) return;
    switch (this.operation) {
      case "+":
        computation = his + res;
        break;
      case "-":
        computation = his - res;
        times;
      case "×":
        computation = his * res;
        break;
      case "÷":
        computation = his / res;
        console.log("division");
        break;
      default:
        return;
    }
    this.result = computation;
    this.operation = undefined;
    this.history = "";
  }

  updateDisplay() {
    this.resultElement.innerText = this.result;
    this.historyElement.innerText = this.history;
  }
}

const calculator = new Calculator(history, result);

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number.innerText);
    calculator.updateDisplay();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.selectOperation(operator.innerText);
    calculator.updateDisplay();
  });
});

// clear screeen
allClearBtn.addEventListener("click", () => {
  calculator.allClear();
  calculator.updateDisplay();
});

// delete
clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
