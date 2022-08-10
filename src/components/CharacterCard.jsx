import React from "react";
import "../style.css";

const CharacterCard = (props) => {
  // create a character card for each char in our database
  const charArray = [];
  // our dummy data will eventually be an array of objs with char data and that char data
  // will populate each char card which will then be spread out into frontend pieces on line 34
  console.log("CharCard props.charArr", props.charArr)
  for (let i = 0; i < props.charArr.length; i++) {
    charArray.push(
      <div className="charCard">
        <div className="image">
          <img src={props.charArr[i].image}></img>
        </div>
        <div className="header">
          <h2>{props.charArr[i].name}</h2>
          <p>{props.charArr[i].bio}</p>
          <a href={props.charArr[i].info} target="_blank">See what the Watcher sees...</a>
        </div>
      </div>
    )
  }

  return (
    <div id="charContainer">
      <div id="watcherCard">
        <div className="image">
          <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e5/Uatu_the_Watcher.png"></img>
        </div>
        <div className="header">
          <h2>UATU THE WATCHER</h2>
          <p>Watcher of Earth</p>
        </div>
      </div>
      {charArray}
    </div>
  )
};


export default CharacterCard;