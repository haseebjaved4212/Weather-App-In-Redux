import { FETCT_CURRENT_SUCCESS, FETCT_FORECAST_SUCCESS, FETCT_WEATHER_ERROR, FETCT_WEATHER_PENDING, FETCT_WEATHER_SUCCESS, SET_CITY } from "../constants/weatherConstants";


const initialState = {
    city: "Karachi",
    current: null,
    forecast: null,
    loading: false,

    error: null
}








const weatherReducer = (state = initialState, action) => {
    if (action.type === FETCT_WEATHER_PENDING) {
        return { ...state, loading: true, error: null }
    } else if (action.type === FETCT_CURRENT_SUCCESS) {
        return { ...state, loading: false, current: action.payload }
    } else if (action.type === FETCT_FORECAST_SUCCESS) {
        return { ...state, loading: false, forecast: action.payload }
    } else if (action.type === FETCT_WEATHER_ERROR) {
        return { ...state, loading: false, error: action.payload }
    } else if (action.type === SET_CITY) {
        return { ...state, city: action.payload }
    }
    else {
        return state
    }
};

export default weatherReducer;
