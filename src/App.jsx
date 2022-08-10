import React, { useState, useEffect } from "react";
//stylesheet import
import "./style.css"
//component import
import Form from "./components/Form"
import CharacterCard from "./components/CharacterCard"

// private and public key for marvel api, plus cryptoJS for md5 hash requirement for API call
const PRIV_KEY = "b84c5de3a473a852e7543ef762979411971a18e7";
const PUBLIC_KEY = "b2c323f20eb40e1f8fd631d7068274a1";
const CryptoJS = require("crypto-js");

const App = () => {
  const title = "The Watcher Presents: A Marvel Character Finder"
  
  //setting up state with usestate hooks
  const [inputText, setInputText] = useState('');
  const [charArr, setCharArr] = useState([]);

  //handling the submit of a char search (trying to figure out how to call marvel API)
  const handleSubmit = (event) => {
    // prevents page refresh and allows the rest of fxn to run
    event.preventDefault();
    // reset our input text area to ""
    document.getElementById('charForm').reset();
    console.log(`HANDLESUBMIT`);
    // MARVEL API requires a timestamp and hash on their api requests
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    // NOTE: had to append https://cors-anywhere.herokuapp.com/ to prevent CORS errors
    fetch(`https://cors-anywhere.herokuapp.com/https://gateway.marvel.com:443/v1/public/characters?name=${inputText}&apikey=b2c323f20eb40e1f8fd631d7068274a1&ts=${ts}&hash=${hash}`)
      .then(data => data.json())
      .then(data => {
        // console.log("url", data.data.results[0].urls[1].url)
        // console.log("image", data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension)
        // console.log("bio", data.data.results[0].descrption ? data.data.results[0].descrption : "Hmmm, I need to look into this peon further...")
        setCharArr(previousArr => {
          // console.log(previousArr);
          return [...previousArr, {
            name: data.data.results[0].name,
            image: data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension,
            bio: data.data.results[0].description ? data.data.results[0].description : "Hmmm, I need to look into this peon further...",
            info: data.data.results[0].urls[1].url
            }
          ];
        });
      });
    };
  


  return (
    <div className="App">
      <div className="navbar">
        <h1>{ title }</h1>
      </div>
        <Form setInputText={setInputText} handleSubmit={handleSubmit}/>
        <div id="charCards">
          <CharacterCard charArr={charArr}/>
        </div>
    </div>
  )
}

export default App;