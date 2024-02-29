import React, { useState } from "react";
import "./Gender.css";
import maleImage from '../components/male.png'
import femaleImage from '../components/female.png'


function Gender() {
  const [gen, setGen] = useState({ Name: "", gender: "", probability: "" });
  async function predict(data) {
    const response = await fetch(`https://api.genderize.io?name=${data}`);
    const resp = await response.json();
    return resp;
  }
  async function fun() {
    const input = document.getElementById("gensearch");
    const value = input.value;
    const getData = await predict(value);
    setGen({
      Name: getData.name,
      gender: getData.gender,
      probability: getData.probability,
    });
  }

  return (
    <div className="mainback2">
      <div className="genderback">
        <div className="genderhead">
          <h2>Predict Gender</h2>
          <h2>By Name</h2>
        </div>
        <div className="gendersearch">
          <input id="gensearch" type="text" placeholder="Enter a name..." />
          <button onClick={fun}>Predict</button>
        </div>
        <div className="genderbox" style={{backgroundColor: gen.gender==="male"? "royalblue" :" pink", color:gen.gender==="male"?"white":"rgb(233, 16, 16)"}} >
          <p id="name">{gen.Name}</p>
          <p id="image" style={{backgroundImage:gen.gender==="male"?`url(${maleImage})`:`url(${femaleImage})`}}>

          </p>
          <h2 id="gen">Gender : {gen.gender}</h2>
          <p id="prob">Probability : {gen.probability}</p>
        </div>
      </div>
    </div>
  );
}

export default Gender;
