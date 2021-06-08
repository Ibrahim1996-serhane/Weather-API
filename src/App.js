import React, { Component } from "react";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "./img/weather-icons/snow.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      // <div className="app">
      //   <SayHi />
      //   <SayHello color="black" name={this.state.name} />
      //   <Search handleInput={this.handleInputChange} />
      // </div>
      <body> 
         <header class="header">
            <form class="first" >
             <input class="input" type="text" defaultValue="London" ></input>
             <button type="submit" >FIND WEATHER</button>
            </form>
        </header> 
      <div class="search">
        <img src ={partlycloudy} alt="partlycloudy"/>
        <div class="text-under"> overcast clouds</div>
        <div class="under-under">Temperature 10<span>&#176;</span> to 11 C</div>
        <div class="unders"> <b>HUmidity</b> 78% <b>pressure</b> 10008.48</div>
      </div>
      <div class="list">
  <div class="list-first">
    <p>03:00</p>
    <img src ={partlycloudy} alt="partlycloudy"/>
    <p>8 C</p>
  </div>
  <div class="list-second">
    <p>06:00</p>
    <img src ={partlycloudy} alt="partlycloudy"/>
    <p>9<span>&#176;</span>C</p>
  </div>
  <div class="list-third">
    <p>09:00</p>
    <img src ={clear} alt="clear"/>
    <p>14<span>&#176;</span>C</p>
  </div>
  <div class="list-fourth">
    <p>12:00</p>
    <img src ={clear} alt="clear"/>
    <p>17<span>&#176;</span>C</p>
  </div>
  <div class="list-fifth">
    <p>15:00</p>
    <img src ={clear} alt="clear"/>
    <p>18<span>&#176;</span>C</p>
  </div>
  <div class="list-sixth">
    <p>18:00</p>
    <img src ={clear} alt="clear"/>
    <p>16<span>&#176;</span>C</p>
  </div>
  <div class="list-seventh">
    <p>21:00</p>
    <img src ={partlycloudy} alt="clear"/>
    <p>13<span>&#176;</span>C</p>
  </div>
</div>
</body>
    );
  }
}
export default App;
