import React, { useState } from 'react'
import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';



export default function SearchBox(props) {

  let [city,setCity] = useState("");

  let [vis,setVis] = useState("hidden");



let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55304835968b8edbd86763f9cc182916&units=metric`

let fetchCity = async ()=>{

    let res = await fetch(url);
    let respo = await res.json();
    console.log(respo);
    console.log(respo.sys.sunrise);
    let result = {
      city: respo.name,
temp:respo.main.temp,
wind: respo.wind.speed,
des : respo.weather[0].description,
humidity:respo.main.humidity,
feelsLike:respo.main.feels_like,
pressure:respo.main.pressure,
maxTemp:respo.main.temp_max,
minTemp:respo.main.temp_min,
    }
console.log(result);



return result;



}



let handleChange = async (event)=>{
  setCity(event.target.value);

  
  }



  let submitForm = async (event)=>{
    setVis("");
    setCol("secondary");
    event.preventDefault();
    let info = await fetchCity();
    props.update(info);
    setVis("hidden");
    setCol("primary");
   
   }

   let [col,setCol] = useState("primary");

  return (
    <div>
  
  <form onSubmit={submitForm} className="text-center space-y-4 pt-4">

  <TextField id="city" label="Search city" value={city} onChange={ handleChange}  variant="outlined" required/>
  <br />
      <Button className='font-bold' color={`${col}`} variant="contained" type='submit' >
        Search
      </Button>


  </form>
     <div className={`${vis} border-4 border-blue-900 border-t-blue-200 animate-spin rounded-full w-5 h-5 mx-auto mt-4`}></div>
    
    </div>
  )
}
