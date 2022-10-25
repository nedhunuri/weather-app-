import { createStore, applyMiddleware } from "redux";
import { WeatherReducer } from "./reducer";
import thunk from "redux-thunk";
const WeatherStore = createStore(
  WeatherReducer,
  applyMiddleware(thunk)
);
export default WeatherStore;