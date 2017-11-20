import {
    SET_NEW_CITY, SHOW_WEATHER, GET_CURRENT_WEATHER, GET_FIVE_DAY_FORECAST, RESET,
    BEGIN_QUERY, QUERY_FINISHED
} from "./constants";
import axios from 'axios';

export const setNewCity = (cityName) => ({type: SET_NEW_CITY, payload: cityName});

export const showWeather = () => ({type: SHOW_WEATHER});

export const getWeatherData = (city, apiKey) => {
    return dispatch => {
        dispatch({type: BEGIN_QUERY});
        dispatch({type: RESET});
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
            .then(response => {
                console.log("FIRST QUERY FINISHED", response.data);
                dispatch({
                    type: GET_CURRENT_WEATHER,
                    payload: response
                })
            })
            .then(() => {
                return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`)
            })
            .then(response => {
                console.log("SECOND QUERY FINISHED", response.data);
                dispatch({
                    type: GET_FIVE_DAY_FORECAST,
                    payload: response
                });
            })
            .then(() => console.log("DONE"))
            .catch(err => {
                console.error(err);
                dispatch({
                    type: GET_CURRENT_WEATHER,
                    payload: err
                });
            })
            .then(() => dispatch({type: QUERY_FINISHED}));
    }
};


export const reset = () => ({type: RESET});