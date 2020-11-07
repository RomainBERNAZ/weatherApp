import React, { useState, useEffect } from 'react';
import './App.css';



function App() {

const [ image, setImage] = useState('');
const [ temp, setTemp] = useState('');
const [ city, setCity] = useState('');
const [ input, setInput] = useState('');
const logo = "http://openweathermap.org/img/w/" + image + ".png";




useEffect (() => {

  async function fetchData(){

    try{
       const response =   await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=2948eccdc30baaeb3ad5a74151b84eb1`);
       const json = await response.json();
       console.log(json)
        setTemp(json.main.temp);
        setImage(json.weather[0].icon);  
        
    }catch(error) {}
  }
  
  if (city !== ''){
    fetchData();
  } else {
    setTemp(null);
    setImage(null);
    document.getElementById('span').style.display="none";
  }
  
},[city]);


  return (
    <div className="App">
      <div className="titre">
        <h1><span>W</span>EATHER APPLICATIO<span>N</span></h1>
      </div>

      <div className="card">
        <form onSubmit={e => {e.preventDefault(); setCity(input);}}>

          <input value={input} onChange={e =>setInput(e.target.value)} type="text" placeholder="City..."/>

          <button type="submit"><i class="fas fa-search"></i></button>
        </form>
        <h2 className="city">{city}</h2>
         <img src={logo} alt=""/> 
         <div className="temperature">
         <h3>{temp}<span id="span">°C</span></h3>
         </div>
         <div className="return">
            <a href="https://romainbernaz.github.io/portfolioV2/"><button>BACK</button></a>
         </div>
        
      </div>
    </div>
  );
}

export default App;
