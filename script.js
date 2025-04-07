function convertToRoman(num) {
  const obj = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let roman = '';

  // Iterate over the object array
  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i][1]) {
      roman += obj[i][0]; // Append the Roman numeral to the result
      num -= obj[i][1];   // Subtract the corresponding value from the number
    }
  }

  return roman;
}

// Test the function with the number 36
//console.log(convertToRoman(36)); // Expected output: "XXXVI"


// do not edit below this line
module.exports = convertToRoman