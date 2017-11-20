import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import CurrentWeather from '../current-weather/CurrentWeather.js';
import FiveDayForecast from "../five-day-forecast/FiveDayForecast.js";

import './WeatherWidget.css';

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

class WeatherWidget extends Component {
    render() {
        if(this.props.checkClicked && this.props.queryFinished && isEmpty(this.props.error)) {
            const currentWeatherParams = {
                date: moment.unix(this.props.currentWeather.data.dt).format('DD MMM YYYY HH:mm'),
                iconId: this.props.currentWeather.data.weather[0].icon,
                description: capitalize(this.props.currentWeather.data.weather[0].description),
                temperature: this.props.currentWeather.data.main.temp,
                humidity: this.props.currentWeather.data.main.humidity,
                wind: this.props.currentWeather.data.wind,
                cityName: capitalize(this.props.cityName),
                country: this.props.currentWeather.data.sys.country
            };
            const dataList = this.props.fiveDayForecast.data.list;
            const forecastParams = [];
            for(let i = 0; i < 5; i++) {
                forecastParams.push({
                    date: moment.unix(dataList[i * 8].dt).format('MMM DD'),
                    mintemp: Math.round(dataList[i * 8 + 1].main.temp),
                    maxtemp: Math.round(dataList[i * 8 + 4].main.temp),
                    iconId: dataList[i * 8 + 3].weather[0].icon,
                    description: dataList[i * 8 + 3].weather[0].description
                });
            }
            return(
                <div className="weather-widget">
                    <CurrentWeather
                        currentWeatherParams={currentWeatherParams}
                    />
                    <FiveDayForecast params={forecastParams} />
                </div>
            );
        }
        else if(this.props.checkClicked && !this.props.queryFinished) {
            return(
                <p>Loading...</p>
            )
        }
        else if(!isEmpty(this.props.error)) {
            return (
                <p>Error: {this.props.error.response.data.message}!</p>
            )
        }
        else {
            return(
                <p className="enter-a-city">Enter a city and get relevant weather for today and next 5 days!</p>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.appReducer.cityName,
        checkClicked: state.appReducer.checkClicked,
        currentWeather: state.weatherReducer.currentWeather,
        fiveDayForecast: state.weatherReducer.fiveDayForecast,
        error: state.weatherReducer.error,
        queryFinished: state.weatherReducer.queryFinished
    }
};

export default connect(mapStateToProps)(WeatherWidget);