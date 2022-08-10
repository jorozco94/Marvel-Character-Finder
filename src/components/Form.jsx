import React from "react";


const Form = (props) => {
  // write a function to handle our input
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    props.setInputText(event.target.value)
  }
  return(
    <div className="search">
      <form>
        <label htmlFor="charSearch">Who can the Watcher help you discover?</label>
        <input placeholder="Enter character name" id="charSearch" name="charSearch" onChange={inputTextHandler} ></input>
        <input type="submit" value="Who is this?"></input>
      </form>
    </div>
  );
};

export default Form;