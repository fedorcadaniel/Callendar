import './WeatherFrame.css'

import { useState } from 'react';

export default function WeatherFrame() {
    const information = {
        location: "Cluj-Napoca",
        temperatureValue: 33,
        temperatureUnit: "Celsius",
    }
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    

    return(
        <div className = "weather-frame">
            <div className = "info">
                <div className="location-name">{information.location}</div>
                <div className="temperature-number">{information.temperatureValue}</div>
                <div className="temperature-unit">{information.temperatureUnit}</div>
            </div>
            <button onClick={handleClick}>You clicked me:{count} times.</button>
            <div className="weather-image">Image Placeholder</div>
        </div>
    )
}