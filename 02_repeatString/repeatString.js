const repeatString = function(x, y) {
    if (y < 0) return "ERROR";
    let z = "";
    for (let i = 0; i < y; i++) {
      z += x;
    }
    return z;
  };



// Do not edit below this line
module.exports = repeatString;
