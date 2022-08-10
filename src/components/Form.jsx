import React from "react";
import "../style.css";


const Form = (props) => {
  // write a function to handle our user input (the character they search)
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    props.setInputText(event.target.value)
  }
  return(
    <div className="search">
      <form id="charForm" onSubmit={props.handleSubmit}>
        <label htmlFor="charSearch">Who can the Watcher help you discover?</label>
        <input placeholder="Enter character name" id="charSearch" name="charSearch" onChange={inputTextHandler}></input>
        <button type="submit">Who is this?</button>
      </form>
    </div>
  );
};

export default Form;