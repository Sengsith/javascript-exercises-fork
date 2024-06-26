const sumAll = function (x, y) {
  if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number") {
    return "ERROR";
  }

  let result = 0;

  if (x < y) {
    for (let i = x; i <= y; i++) {
      result += i;
    }
  } else {
    for (let i = y; i <= x; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
