import {FETCT_WEATHER_PENDING, FETCT_CURRENT_SUCCESS, FETCT_FORECAST_SUCCESS, FETCT_WEATHER_ERROR, SET_CITY} from "../constants/weatherConstants";
import axios from "axios";

const API_KEY = import.meta.env.local.VITE_WEATHER_API

export const fetchWeatherPending = () => {
    return {
        type : FETCT_WEATHER_PENDING
    }
}
export const fetchCurrentSuccess = (data) => {
    return {
        type : FETCT_CURRENT_SUCCESS,
        payload : data
    }
}
export const fetchForecastSuccess = (data) => {
    return {
        type : FETCT_FORECAST_SUCCESS,
        payload : data
    }
}

export const fetchWeatherError = (error) => {
    return {
        type : FETCT_WEATHER_ERROR,
        payload : error
    }
}

export const setCity = (city) => {
    return {
        type : SET_CITY,
        payload : city
    }
}


export const fetchWeather = (city) => {
   axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
}
