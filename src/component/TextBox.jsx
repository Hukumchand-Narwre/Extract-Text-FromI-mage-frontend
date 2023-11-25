import React, { useRef } from "react";
import classes from "./TextBox.module.css";
import copy from "copy-to-clipboard";
const TextBox = ({ displayText }) => {
  const copyToClipboard = () => {
    copy(displayText);
    alert(`You have copied "${displayText}"`);
  };

  return (
    <>
      <div style={{ width: "100%", maxWidth: "800px", height: "auto" }} className={classes.copyBox}>
        <div>{displayText}</div>
      </div>
      <button onClick={copyToClipboard} className={classes.button}>
        Copy to clipboard
      </button>
    </>
  );
};

export default TextBox;
