import React from "react";

const Loader = ({ show }) => {
  return (
    <div className={`loader ${!show ? "hidden" : ""}`}>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
