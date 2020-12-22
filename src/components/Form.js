import React, { useState } from "react";

function Form({ getInput }) {
  const [input, setInput] = useState(20);

  function handleChange(e) {
    setInput(+e.target.value);
    getInput(+e.target.value);
  }

  return (
    <>
      <div className="form-password">
        <p>Password length</p>
        <form action="#" method="POST">
          <input type="number" id="length" min="4" max="20" autoComplete="off" value={input} onChange={handleChange} />
        </form>
      </div>
    </>
  );
}

export default Form;
