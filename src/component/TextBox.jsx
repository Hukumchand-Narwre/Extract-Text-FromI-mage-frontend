import React from 'react'
import classes from './TextBox.module.css';
const TextBox = () => {
  return (
    <>
    <div className={classes.copyBox}>
        <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
    </div>
        <button className={classes.button}>Extract Key Phrases</button>
    </>
  )
}

export default TextBox