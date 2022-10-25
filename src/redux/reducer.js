const WeatherInitialState = {
    data: []
  };
  export const WeatherReducer = (state = WeatherInitialState, action) => {
    console.log(action,state)
    switch (action.type) {
      case "WEATHER_DETAILS":
        console.log(action,state)     
        return {
            ...state,
            data: action.payload  
        }
        default:   
            return state;
    }
}

