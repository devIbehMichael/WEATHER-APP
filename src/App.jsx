import React,{useState} from 'react'
import './App.css';
import Body from './Body'
import axios from 'axios'
import Front from './Front';

function App(props) {
//  const url ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={0b15abef3e662e85f7435b95f2e0c5e4}'
const [data,setData] = useState({})
const [location,setLocation]=useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0b15abef3e662e85f7435b95f2e0c5e4`
 

const searchLocation =(event)=>{
  if(event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
console.log(response.data)
    })
  setLocation('')

  }
}

return (
    <div className="App">
   {data.name ? <Body data={data} /> : <Front searchLocation={searchLocation} location={location} setLocation={setLocation}/> }
      {/* <Front searchLocation={searchLocation} location={location} setLocation={setLocation}/> */}
       {/* <Body data={data}/> */}
      
    </div>
  );
}

export default App;
