import {createStore, compose , applyMiddleware} from "redux";
import weatherReducer from "./reducers/weatherReducer";
import {thunk }from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    weatherReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));


export default store;

