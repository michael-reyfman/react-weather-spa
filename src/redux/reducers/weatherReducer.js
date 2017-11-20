import {BEGIN_QUERY, GET_CURRENT_WEATHER, GET_FIVE_DAY_FORECAST, QUERY_FINISHED, RESET} from "../constants";

const initialState = {
    queryFinished: undefined,
    currentWeather: {},
    fiveDayForecast: {},
    error: {}
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_WEATHER:
            if(action.payload.status === 200) {
                return {...state, currentWeather: action.payload};
            }
            else {
                return {...state, error: action.payload};
            }
        case GET_FIVE_DAY_FORECAST:
            if(action.payload.status === 200) {
                return {...state, fiveDayForecast: action.payload};
            }
            else {
                return {...state, error: action.payload};
            }
        case BEGIN_QUERY:
            return {...state, queryFinished: false};
        case QUERY_FINISHED:
            return {...state, queryFinished: true};
        case RESET:
            return initialState;
        default:
            return state;
    }
};

export default weatherReducer;