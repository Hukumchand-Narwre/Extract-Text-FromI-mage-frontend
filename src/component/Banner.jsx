import React from "react";
import classes from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={classes.header}>
      <h1>Image to Text Converter</h1>
      <p>
        Unlock the Power of Your Images! Transforming Visuals into Text with Cutting-Edge Azure OCR Technology.
        Experience Seamless Text Extraction from Images on Our Website. Try It Today!
      </p>
    </div>
  );
};

export default Banner;
