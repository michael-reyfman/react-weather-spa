import React from 'react';

const FiveDayForecast = (params) => {
    const forecast = params.params.map((item, index) => (
        <li key={index}>
            <span className="forecast-date">{item.date}</span>
            <span className="forecast-description">
                <img
                    src={`http://openweathermap.org/img/w/${item.iconId}.png`}
                    alt="icon"
                    className="forecast-icon"
                />
                {item.description}</span>
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