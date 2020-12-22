import React, { useState } from "react";
import "./App.css";

// components
import Screen from "./components/Screen";
import Form from "./components/Form";
import CheckBoxes from "./components/CheckBoxes";

// overall Function
function App() {
  // form
  const [input, setInput] = useState(20);

  const [functions, setFunctions] = useState({
    lower: getRandomLower,
    upper: getRandomUppercase,
    number: getRandomNumber,
    symbols: getRandomSymbols,
  });

  const [isUppercaseChecked, setIsUppercaseChecked] = useState(true);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState(true);
  const [isNumberChecked, setIsNumberChecked] = useState(true);
  const [isSymbolChecked, setIsSymbolChecked] = useState(true);

  const [value, setValue] = useState("");

  function checkUppercase(e) {
    let uppercasechecked = e.target.checked;
    setIsUppercaseChecked(uppercasechecked);
  }
  function checkLowercase(e) {
    let lowercasechecked = e.target.checked;
    setIsLowercaseChecked(lowercasechecked);
  }
  function checkNumber(e) {
    let numberchecked = e.target.checked;
    setIsNumberChecked(numberchecked);
  }
  function checkSymbol(e) {
    let symbolchecked = e.target.checked;
    setIsSymbolChecked(symbolchecked);
  }

  // copy to clipboard
  function clipboard() {
    const textarea = document.createElement("textarea");
    const password = value;
    if (!password) {
      alert("There is nothing to copy");
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copied to clipboard");
  }

  // generator functions

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbols() {
    const symbols = '~`!@#$%^&*()_-=+[]{}:;"/?>.<,|';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function getInput(value) {
    setInput(value);
  }

  function generatePassword() {
    const passwordLength = input;
    const uppercaseChecked = isUppercaseChecked;
    const lowercaseChecked = isLowercaseChecked;
    const numberChecked = isNumberChecked;
    const symbolChecked = isSymbolChecked;
    setValue(generatePasswordBackend(uppercaseChecked, lowercaseChecked, numberChecked, symbolChecked, passwordLength));
  }

  function generatePasswordBackend(upper, lower, number, symbols, passwordLength) {
    let generatedPassword = "";
    const totalChecked = lower + upper + number + symbols;
    const totalCheckedArray = [{ upper }, { lower }, { number }, { symbols }].filter((checked) => Object.values(checked)[0]);
    let finalPassword;

    if (totalChecked === 0) {
      return (finalPassword = "please check one or more boxes");
    }
    if (passwordLength > 20) {
      alert("20 is the maximum number of password that can be generated");
      return (finalPassword = "");
    }
    if(passwordLength < 8){
            alert("8 is the minimum length of a safe password");

    }
    for (let i = 0; i < passwordLength; i += totalChecked) {
      totalCheckedArray.forEach((item) => {
        const functionName = Object.keys(item)[0];
        generatedPassword += functions[functionName]();
      });
    }
    finalPassword = generatedPassword.slice(0, passwordLength);
    return finalPassword;
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Password Generator</h2>
        <Screen value={value} clipboard={clipboard} />
        <Form getInput={getInput} />
        <CheckBoxes checkLowercase={checkLowercase} checkUppercase={checkUppercase} checkNumber={checkNumber} checkSymbol={checkSymbol} />
        <button className="button" onClick={generatePassword}>
          Generate password
        </button>
      </div>
    </div>
  );
}

export default App;
