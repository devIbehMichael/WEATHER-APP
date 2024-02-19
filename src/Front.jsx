import React from 'react'
import './Front.css'
const Front = (props) => {
    const searchLocation = props.searchLocation
    const location = props.location
    const setLocation = props.setLocation
  return (
    <div className='Front'>
       <h2>WEATHER APP</h2>
       <h4>type your city </h4>
       <p>and click enter</p>  
         <div className="input"><input 
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Search-location'
        />
    </div>
    </div>
  )
}

export default Front