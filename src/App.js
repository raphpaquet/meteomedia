import './App.scss';
import { useState, useEffect } from 'react';
import Current from './components/Current';
import Header from './components/Header';
import Search from './components/Search';
import axios from 'axios';

function App() {

  // const [city, setCity] = useState('montreal');
  const [currentLocation, setCurrentLocation] = useState('');
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log('longitude', long)
      console.log('latitude', lat)
    });
  }, [lat,long]);

    const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(function(response) {
      setCurrentLocation(response.data['main']['name'])
      console.log(currentLocation)
      })
      .catch(error => console.log(error))
    }

    // getWeather();

  return (
    <div className="App">
      <Header />
      <Search />
      <Current />
    </div>
  );
}

export default App;
