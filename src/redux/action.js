import axios from "axios";
const REACT_APP_API_URL = `https://api.openweathermap.org/data/2.5`
const REACT_APP_API_KEY = `1315cfc51991a378816216678aa6d5e2`
export const GetWeatherDetails = (lat, long) => {
    console.log(lat, long)
    return async dispatch => {
        await axios.get(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "WEATHER_DETAILS",
                    payload: response.data
                })
            }
            )
    }
}
