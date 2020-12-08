import React, { useState, useEffect } from 'react';
import './App.css';



function App() {

const [ image, setImage] = useState('');
const [ temp, setTemp] = useState('');
const [ city, setCity] = useState('');
const [ input, setInput] = useState('');
const logo = "https://openweathermap.org/img/w/" + image + ".png";

const cityFinal = city.charAt(0).toUpperCase() + city.slice(1)
const tempFinal = Math.round(temp);

  if (tempFinal===0){
  document.getElementById('temperature').style.display='none';
  }else {
    document.getElementById('temperature').style.display='block';
  }



useEffect (() => {

  async function fetchData(){


    try{
       const response =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityFinal}&lang=fr&units=metric&appid=2948eccdc30baaeb3ad5a74151b84eb1`);
       const json = await response.json();
       console.log(json.message)

       if(json.message === 'city not found'){
        document.getElementById('errorweather').style.display='block'
        setTemp(null);
        setImage(null);

       }else {
        setTemp(json.main.temp);
        setImage(json.weather[0].icon);  
        document.getElementById('errorweather').style.display='none'

       }

      
        
    }catch(error) {
        setTemp(null);
        setImage(null);
        document.getElementById('span').style.display="none";

    }
  }
  
  if (cityFinal !== ''){
    fetchData();
    setInput('');
    document.getElementById('span').style.display="inline-flex";
  } else {
    setTemp(null);
    setImage(null);
    document.getElementById('span').style.display="none";
  }
  
},[cityFinal]);


  return (
    <div className="App">
      <div className="titre">
        <h1><span>W</span>EATHER APPLICATIO<span>N</span></h1>
      </div>

      <div className="card">
        <form onSubmit={e => {e.preventDefault(); setCity(input);}}>

      <div className="inputLink">
      <input id="inputweather"value={input} onChange={e =>setInput(e.target.value)} type="text" placeholder="City..."/>
                <button type="submit"><i class="fas fa-search"></i></button>
      </div>
          <h3 id="errorweather" className="errorweather">La ville recherchée ne semble pas exister ou est mal orthographiée.</h3>

        </form>
        <h2 className="city">{cityFinal}</h2>
         <img src={logo} alt=""/> 
         <div className="temperature">
         <h3 id="temperature">{tempFinal}<span id="span">°C</span></h3>
         </div>
         <div className="return">
            <a href="https://romainbernaz.github.io/portfolioV2/"><button>BACK</button></a>
         </div>
        
      </div>
    </div>
  );
}

export default App;
