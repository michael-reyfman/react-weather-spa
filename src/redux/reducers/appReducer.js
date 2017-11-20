import {SET_NEW_CITY, SHOW_WEATHER, RESET} from "../constants";

const initialState = {
    cityName: '',
    checkClicked: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEW_CITY:
            return {...state, cityName: action.payload};
        case SHOW_WEATHER:
            return {...state, checkClicked: true};
        case RESET:
            return {...state, checkClicked: undefined};
        default:
            return state;
    }
};

export default appReducer;