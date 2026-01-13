import { FETCT_CURRENT_SUCCESS, FETCT_FORECAST_SUCCESS, FETCT_WEATHER_ERROR, FETCT_WEATHER_PENDING, FETCT_WEATHER_SUCCESS, SET_CITY } from "../constants/weatherConstants";


const initialState = {
    city : "Karachi",
    current: null,
    forecast: null,
    loading : false,

    error : null
}








const weatherReducer = (state = initialState, action) => {
if(action.type === FETCT_WEATHER_PENDING){
    
}else if(action.type === FETCT_CURRENT_SUCCESS){

}else if(action.type === FETCT_FORECAST_SUCCESS){

}else if(action.type === FETCT_WEATHER_ERROR){

}else if(action.type === SET_CITY){

}
else{
    return state
}
};

export default weatherReducer;
