import React, { Component } from 'react';

import CityInputForm from './components/city-input-form/CityInputForm.js';
import WeatherResults from './components/weather-widget/WeatherWidget.js';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>react-weather</h1>
                <CityInputForm />
                <WeatherResults />
            </div>
        );
    }
}

export default App;

