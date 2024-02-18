
import {React,useState} from 'react'

const Converter = () => {

    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');
  
   
    const handleFahrenheitChange = (e) => {
      const value = e.target.value;
      setFahrenheit(value);
     
      const convertedCelsius = (value - 32) * (5/9);
      setCelsius(convertedCelsius.toFixed(2));
    };
  
    
    const handleCelsiusChange = (e) => {
      const value = e.target.value;
      setCelsius(value);
     
      const convertedFahrenheit = (value * (9/5)) + 32;
      setFahrenheit(convertedFahrenheit.toFixed(2));
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
