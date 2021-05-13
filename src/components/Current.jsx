import { useState, useEffect } from "react";
import axios from 'axios';


export default function Current() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // console.log('longitude', long)
      // console.log('latitude', lat)
    });
  }, [lat,long]);

 
  // const getWeather = () => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  //   .then(function(response) {
  //     // console.log(response.data.main.name)
  //   })
  // }

  // getWeather();


  return (
    <div>
      <div className="current"></div>
    </div>
  );
}
