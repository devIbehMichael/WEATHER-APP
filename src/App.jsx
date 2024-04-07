import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { MdOutlineCompress } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { TiArrowUpThick } from "react-icons/ti";
import {  TiArrowDownThick } from "react-icons/ti";
import { RxMagnifyingGlass } from "react-icons/rx";

function App(props) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const apiKey = '0b15abef3e662e85f7435b95f2e0c5e4'; // Ensure to keep your API keys secure
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Handle the error accordingly
      let message = "An unexpected error occurred.";

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 404) {
          message = "Location not found. Please check your input.";
        } else if (error.response.status === 401) {
          message = "Unauthorized access. Check your API key.";
        }
      } else if (error.request) {
        // The request was made but no response was received
        message = "Network error. Please check your internet connection.";
      }
  
      setErrorMessage(message);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setData({});
    fetchWeather(); // Fetch weather data for the new location
    console.log(data.main);
  };

  // Moved inside the App function
  return (
    <div className="App">
         
      <div className="body">
        <div className="header">
          <h1>Weather App</h1>
        </div>
        <div className="search">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder='Please enter a location'
        />
        <button><RxMagnifyingGlass onClick={handleSubmit} /></button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {data.main && ( 
            <div className="layer1">
        <div className="grid1left">
          <h2>{data.name}</h2>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
          
          <p> {data.weather[0].main}</p> 
        </div>
          <div className="grid1right">
            <h2>{data.main.temp}°C</h2>
            <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        </div>
         )}   
        {data.main && (
          <>
          <div className="grid2">
          <p>Min Temp  <TiArrowDownThick size="48" color="black" /> </p>
          <h3>{data.main.temp_min}°C</h3>
        </div>
        <div className="grid3">
          <p>Max Temp <TiArrowUpThick size="48" color="black" /> </p>
          <h3>{data.main.temp_max}°C</h3>
        </div>
       
        <div className="grid4">
          <p>Pressure <MdOutlineCompress size="48" color="black" /> </p>
          <h3>{data.main.pressure}Pa</h3>
        </div>
        <div className="grid5">
          <p>Speed <BiWind size="48" color="black" /> </p>
          <h3>{data.wind.speed }m/s</h3>
        </div>
        <div className="grid6">
          <p>Humidity <WiHumidity size="48" color="black" /> </p>
          <h3>{data.main.humidity}%</h3>
        </div>
        <div className="grid7">
          <p>Feels like <HiEmojiHappy size="48" color="black" /> </p>
          <h3>{data.main.feels_like }°C</h3>
        </div>
          </>
        )}
        
        
      </div>
        
    </div>
  
  );
}

export default App;