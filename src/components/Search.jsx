import React, { useState } from 'react';
import axios from 'axios';

export default function Search(props) {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [icon, setIcon] = useState([]);


  const changeCity = (e) => {
    setCity(e.target.value)
    console.log(city)
  }


    const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(function(response) {
      setIcon(response.data['weather'][0]['icon'])
      setFeelsLike(response.data['main']['feels_like'])
      setTemp(response.data['main']['temp'])
    })
    .catch(error => console.log(error))
  }

  const iconImg = `http://openweathermap.org/img/wn/${icon}@2x.png`
 
  getWeather();
  return (
    <div className="search">
      <form onSubmit={() => setCity(city)} >
        <h2>Search your city</h2>
        <input value={city} type="text" onChange={changeCity}>
        </input>
      </form>
      <div className="show">
        <h1>Weather in {city}</h1>
        <img src={iconImg} alt="weather icon"/>
        <h3>{temp} °C</h3>
        <p>Feels like {feelsLike} °C</p>
      </div>
    </div>
  )
}
