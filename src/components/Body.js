import React ,{Component} from "react";
import fakeWeatherData from "../fakeWeatherData.json";

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";


class Body extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (



      <div class="middle">
      <img src ={mostlycloudy} alt="mostltCloudy"/>
      <div class="text-under"> overcast clouds</div>
      <div class="under-under">Temperature {Math.floor(fakeWeatherData.list[0].main.temp - 273.15)}<span>&#176;</span> to {Math.floor(fakeWeatherData.list[1].main.temp - 273.15)} C</div>
      <div class="unders"> <b>HUmidity </b> {fakeWeatherData.list[0].main.humidity}% <b>pressure</b> {fakeWeatherData.list[0].main.pressure}</div>
    </div>


);
}
}
export default Body