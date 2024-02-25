
import {React,useState} from 'react'

const Converter = () => {

    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');
  
   
    const handleFahrenheitChange = (e) => {
      if(e.target.value){
      const value = e.target.value;
      setFahrenheit(value);
     
      const convertedCelsius = (value - 32) * (5/9);
      setCelsius(convertedCelsius);
      }
      else{
        setCelsius("")
        setFahrenheit("")
      }
    };
  
    
    const handleCelsiusChange = (e) => {
      if(e.target.value){
      const value = e.target.value;
      setCelsius(value);
     
      const convertedFahrenheit = (value * (9/5)) + 32;
      setFahrenheit(convertedFahrenheit);
      }
      else{
        setFahrenheit("")
        setCelsius("")
      }
    };

  return (
    <div>
      <h1>Temperature Converter</h1>
        <div>
        <label>Fahrenheit:</label>
        <input type='number' value={fahrenheit} onChange={handleFahrenheitChange} placeholder='Enter Fahrenheit temperature' />
      </div>
      <div>
        <label>Celsius:</label>
        <input type='number' value={celsius} onChange={handleCelsiusChange} placeholder='Enter Celsius temperature' />
      </div>
      <div>
        <h2>{fahrenheit}</h2>
        <h2>{celsius}</h2>
      </div>
      
    </div>
  )
}

export default Converter
