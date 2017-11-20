import React from 'react';
import ReactSVG from 'react-svg';

import sun from '../../weather-icons/Sun.svg';
import cloudsun from '../../weather-icons/Cloud-Sun.svg';
import cloud from '../../weather-icons/Cloud.svg';
import cloudmoon from '../../weather-icons/Cloud-Moon.svg';
import moon from '../../weather-icons/Moon.svg';
import rain from '../../weather-icons/Cloud-Rain.svg';
import rainsun from '../../weather-icons/Cloud-Rain-Sun.svg';
import rainmoon from '../../weather-icons/Cloud-Rain-Moon.svg';
import cloudlightning from '../../weather-icons/Cloud-Lightning.svg';
import snow from '../../weather-icons/Cloud-Snow.svg';
import cloudfog from '../../weather-icons/Cloud-Fog.svg';

const WeatherIcon = (id) => {
    switch(id.id) {
        case '01d':
            return (
                <ReactSVG
                    path={sun}
                    className="weather-icon-big"
                />
            );
        case '01n':
            return (
                <ReactSVG
                    path={moon}
                    className="weather-icon-big"
                />
            );
        case '02d':
            return (
                <ReactSVG
                    path={cloudsun}
                    className="weather-icon-big"
                />
            );
        case '02n':
            return (
                <ReactSVG
                    path={cloudmoon}
                    className="weather-icon-big"
                />
            );
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return (
                <ReactSVG
                    path={cloud}
                    className="weather-icon-big"
                />
            );
        case '09d':
        case '09n':
            return (
                <ReactSVG
                    path={rain}
                    className="weather-icon-big"
                />
            );
        case '10d':
            return (
                <ReactSVG
                    path={rainsun}
                    className="weather-icon-big"
                />
            );
        case '10n':
            return (
                <ReactSVG
                    path={rainmoon}
                    className="weather-icon-big"
                />
            );
        case '11d':
        case '11n':
            return (
                <ReactSVG
                    path={cloudlightning}
                    className="weather-icon-big"
                />
            );
        case '13d':
        case '13n':
            return (
                <ReactSVG
                    path={snow}
                    className="weather-icon-big"
                />
            );
        case '50d':
        case '50n':
            return (
                <ReactSVG
                    path={cloudfog}
                    className="weather-icon-big"
                />
            );
        default:
            return (
                <ReactSVG
                    path={sun}
                    className="weather-icon-big"
                />
            );
    }
};

export default WeatherIcon;