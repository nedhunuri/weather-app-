import { useSelector, useDispatch } from "react-redux/es/exports";
import React, { useEffect } from "react";
import { GetWeatherDetails } from "./redux/action";
import "./App.css"
// const App = () => {
// const [city,setCity] =useState("")
// const[result,setResult] =useState("")
// const changeHandler=e=>{
//   setCity(e.target.value);

// }
// const submitHandler=e=>{
//   e.preventDefault();
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
//   response=>response.json()
// ).then(data=>{
//   const kelvin=data.main.temp;
//   const celsius=kelvin-273.15
//   setResult("Temperature at" + " "+ city + "\n "+ Math.round(celsius)+"°C");
//   setCity("");
// })

// }
const FetchData = () => {
  const data = useSelector(state => state.data)
  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      dispatch(GetWeatherDetails(
        position.coords.latitude, position.coords.longitude
      ))
    });
  }, [])
  return (
    <>
     <div className="weather">
      <center>
        <div className="app" >
             <h1>WEATHER APP</h1>
          <div className="Data" >
           <p>current location:{data.name}</p>
           <p>latitude:{data.coord?.lat}</p>
           <p>longitude:{data.coord?.lon}</p> 
           <div>{data.main ? <p>Temperature: {data.main.temp}°F</p> : null}</div>
           <p>feels_like:{data.main?.feels_like}</p>
           <p>humidity:{data.main?.humidity}</p>
          </div>
        </div>
      </center>
   </div>
    </>
  )
}
export default FetchData;