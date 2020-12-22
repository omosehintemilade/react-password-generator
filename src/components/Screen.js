import React from "react";

function Screen({ value, clipboard }) {
  return (
    <>
      <div className="screen-icon">
        <div className="screen">{value}</div>
        <button className="icon-btn" onClick={clipboard}>
          <i className="fa fa-clipboard" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}

export default Screen;
