import React, { useState } from "react";
import "./Random.css";
import sound from '../components/volume.png'
function Random() {
  const[word,setWord]=useState({words:'',origin:'',meaning:'',example:''})

  async function getMarvel(data){
    const promise=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`)
    const response=await promise.json()
    return response;
  }
  const marvel=async()=>{
  const inputData=document.getElementById("marvelin")
  const value=inputData.value;
  const get= await getMarvel(value)
  if (get.length > 0) {
    const firstResult = get[0];
    setWord({
      words: firstResult.word,
      origin: firstResult.origin,
      meaning: firstResult.meanings[0].definitions[0].definition,
      example: firstResult.meanings[0].definitions[0].example
    });
  }
  else {
    setWord({ words: 'No results found', origin: 'not found', meaning: 'not found', example: 'Not Found' });
  }
  }

  return (
    <div className="marvelback">
      <div className="marvelbox">
        <div className="marvelsearch">
          <input  id="marvelin" type="text" placeholder="Search" />
          <button onClick={marvel}>Search</button>
        </div>
  
       
        <div className="meaninghead">
        <h2 >{word.words}</h2>
        <p>Origin : {word.origin}</p>

          <p>Meaning : {word.meaning}</p>
          <p>Example : {word.example}</p>
        </div>
      </div>
    </div>
  );
}

export default Random;
