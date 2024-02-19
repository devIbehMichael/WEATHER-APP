import React from 'react';
import './Body.css';
import Date from './Date';
const Body = (props) => {
    const data = props.data
  return (
    <div className='body'>
          <div className="location">
            <p>{props.data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <Date />
          {/* /////////////// */}
          <div className="buttom">
          <div className="feels">
              <p>Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            </div>
             <div className="humidity">
             <p>Humidity</p>
             {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
           </div>
           <div className="wind">
           <p>Wind Speed</p>
           {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
         </div>
         </div>
    </div>
  )
}

export default Body