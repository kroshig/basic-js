const { NotImplementedError } = require("../lib");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.process(message, key, true);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.process(message, key, false);
  }

  process(message, key, isEncrypt) {
    const msgUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const charCode = msgUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const m = charCode - 65;
        const k = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;
        const code = isEncrypt ? (m + k) % 26 : (m - k + 26) % 26;
        result += String.fromCharCode(code + 65);
        keyIndex++;
      } else {
        result += msgUpper[i];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
