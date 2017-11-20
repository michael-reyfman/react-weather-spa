import React from 'react';

import WeatherIcon from '../weather-icon/WeatherIcon.js';

const FiveDayForecast = (params) => {
    const forecast = params.params.map((item, index) => (
        <li key={index}>
            <span className="forecast-date">{item.date}</span>
            <span>
                <WeatherIcon id={item.iconId} size="small"/>
            </span>
            <span className="forecast-description">{item.description}</span>
            <span className="forecast-temperatures">{item.mintemp}°C / {item.maxtemp}°C</span>
        </li>
    ));
    return(
        <div className="five-day-forecast">
            <ul>
                {forecast}
            </ul>
        </div>
    );
};

export default FiveDayForecast;