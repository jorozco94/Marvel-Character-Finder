import React, { useState, useEffect } from "react";
//stylesheet import
import "./style.css"
//component import
import Form from "./components/Form"
import CharacterCard from "./components/CharacterCard"

const App = () => {
  const title = "The Watcher Presents: A Marvel Character Finder"
  
  const [inputText, setInputText] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  return (
    <div className="App">
      <div className="navbar">
        <h1>{ title }</h1>
      </div>
        <Form setInputText={setInputText} />
        <div id="charCards">
          <CharacterCard />
        </div>
    </div>
  )
}

const characterCard = () => {
  // need an array to hold our hero data (objects)
  // iterate through this array and assign the hero data to a charCard
  const heroArr = [];
  for (let i = 0; i < heroArr.length; i++) {

  }
  return (
    <div id="watcherCard">
          <div className="image">
            <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e5/Uatu_the_Watcher.png"></img>
          </div>
          <div className="header">
            <h2>UATU THE WATCHER</h2>
            <p>Bio: Watcher of Earth</p>
          </div>
        </div>
  )
}

export default App;