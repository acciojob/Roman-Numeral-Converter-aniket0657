function intToRoman(num) {
    if (num === 0) return ""; // Roman numerals do not have a representation for zero

    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];
    const syms = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let romanNumeral = "";

    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            romanNumeral += syms[i];
            num -= val[i];
        }
    }

    return romanNumeral;
}

// Example usage:
console.log(intToRoman(14));    // Output: XIV
console.log(intToRoman(798));   // Output: DCCXCVIII
console.log(intToRoman(3999)); // Output: MMMCMXCIX
console.log(intToRoman(0));     // Output: (empty string)