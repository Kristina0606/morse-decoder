/** @format */

const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
  let decodeLetter = "";
  for (i = 0; i < expr.length; i += 10) {
    let morsePart = expr.slice(i, i + 10);
    if (morsePart === "**********") {
      decodeLetter = decodeLetter + " ";
    } else {
      let morseSymbol = "";
      for (j = 0; j < morsePart.length; j = j + 2) {
        let oneSymbol = morsePart.slice(j, j + 2);
        if (oneSymbol === "10") {
          morseSymbol = morseSymbol + ".";
        } else if (oneSymbol === "11") {
          morseSymbol += "-";
        }
      }
      decodeLetter += MORSE_TABLE[morseSymbol] || " ";
    }
  }

  return decodeLetter;
}

// let res = decode("00000011110000000010");
// console.log(res);
module.exports = {
  decode,
};
