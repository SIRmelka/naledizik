import React from "react";
import { useState } from "react";

const Loader = ({ show }) => {

  const [hiddeClass,setHiddeClass] = useState('hidde')

  setTimeout(()=>{
    setHiddeClass('hidden')
  },900)

  return (
    <div className={`loader ${!show ? hiddeClass : ""}`}>
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
