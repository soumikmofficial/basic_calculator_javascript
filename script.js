const result = document.querySelector(".result");
const history = document.querySelector(".history");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

// todo: print history and get history function

const getHistory = () => history.textContent;

const printHistory = (value) => (history.textContent = value);

// todo: print result and getresult

const getResult = () => {
  return result.textContent;
};

const printResult = (value) => {
  if (!value) {
    result.textContent = "";
  } else {
    result.textContent = getFormattedNumber(value);
  }
};

// get formatted number function
const getFormattedNumber = (value) => {
  const num = Number(value);
  const formatted = num.toLocaleString("en");
  return formatted;
};

// reverse number formatter function
const reverseFormat = (value) => {
  const num = Number(value.replace(/,/g, ""));
  return num;
};

// all clear function
const allClear = () => {
  result.textContent = "";
  history.textContent = "";
};

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    // *all clear function
    if (operator.id === "all-clear") {
      allClear();
    }

    // *clear function
    if (operator.id === "clear") {
      let res = reverseFormat(getResult()).toString();
      const newResult = res.substring(0, res.length - 1);
      printResult(newResult);
    }
  });
});
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let res = reverseFormat(getResult());
    if (res !== NaN) {
      let newRes = res + number.id;
      printResult(newRes);
    }
  });
});
