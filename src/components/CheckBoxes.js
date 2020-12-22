import React from "react";

function CheckBoxes({ checkUppercase, checkLowercase, checkNumber, checkSymbol }) {
  return (
    <>
      <div className="flex uppercase">
        <label htmlFor="uppercase">Include uppercase letters</label>
        <input id="uppercase" type="checkbox" defaultChecked onClick={checkUppercase} />
      </div>
      <div className="flex lowercase">
        <label htmlFor="lowercase">Include lowercase letters</label>
        <input id="lowercase" type="checkbox" defaultChecked onClick={checkLowercase} />
      </div>
      <div className="flex numbers">
        <label htmlFor="numbers">Include numbers</label>
        <input id="numbers" type="checkbox" defaultChecked onClick={checkNumber} />
      </div>
      <div className="flex symbols">
        <label htmlFor="numbers">Include symbols</label>
        <input id="symbols" type="checkbox" defaultChecked onClick={checkSymbol} />
      </div>
    </>
  );
}

export default CheckBoxes;
