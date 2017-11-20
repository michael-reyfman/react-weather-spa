import React from 'react';

import WeatherIcon from '../weather-icon/WeatherIcon.js';

const CurrentWeather = (currentWeatherParams) => {
    const params = currentWeatherParams.currentWeatherParams;
    const colors = ['#6A1B9A', '#AD1457', '#C62828', '#4527A0', '#283593', '#1565C0', '#0277BD', '#00838F', '#00695C', '#2E7D32', '#558B2F', '#9E9D24', '#F9A825', '#FF8F00', '#EF6C00', '#D84315', '#4E342E', '#424242', '#37474F'];
    const bgStyle= {
        backgroundColor: colors[Math.round(colors.length * Math.random())]
    };
    return(
        <div className="current-weather" style={bgStyle}>
            <WeatherIcon id={params.iconId}/>
            <p className="city">{params.cityName}, {params.country}</p>
            <p className="curr-date">{params.date}</p>
            <p className="curr-temp">{Math.round(params.temperature)}°C</p>
            <p className="description">{params.description}</p>
            <p className="humidity">Humidity: {params.humidity}%</p>
            <p className="wind">Wind: {params.wind.speed}m/s</p>
        </div>
    );
};

export default CurrentWeather;