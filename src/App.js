import React, { Component } from "react";

import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer"
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import clear from "./img/weather-icons/clear.svg";

import unknown from "./img/weather-icons/unknown.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: [],
      tempFooter: [],
      tempMax: null,
      tempMin: null,
      id:null,
      weather : null,
      pressure: null,
      humidity:null

    };
  }
  handleInputChange = value => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+value+'&cnt=8&units=metric&appid=1c8fd00f3175ad6533e188b48cfd370f')
    .then(res => { if(!res.ok){
      throw Error ('Not fetch');}
      return res.json()} )   
    .then(json => this.setState({tempFooter:json.list,tempMin :json.list[0].main.temp,tempMax :json.list[7].main.temp,pressure: json.list[0].main.pressure,
                                 humidity:json.list[0].main.humidity,id: json.list[0].weather[0].id, },                          
         console.log(json.list[0].weather[0].id)
        )).catch(err =>{
          console.log(err.message);
        })}
weatherIcons=(id) =>{
  if(id < 300) {
    return storm;
  } else if (id>= 300 && id <= 499) {
    return drizzle;
  } else if (id >= 500 && id <= 599) {
    return rain;
  } else if (id >= 600 && id <= 699) {
    return snow;
  } else if (id >= 700 && id <= 799) {
    return fog;
  } else if (id == 800) {
    return clear;
  } else if (id == 801) {
    return partlycloudy;
  } else if (id >= 801 && id <= 805){
    return mostlycloudy;
  } else {
    return unknown;
  }
}
  render() {
    return (
      <div className="app">
<Head handleInputChange={this.handleInputChange} />
<Body  weatherIcons = {this.weatherIcons}
                    id = {this.state.id}
                    pressure ={this.state.pressure}
                    humidity={this.state.humidity}
                  tempMax={this.state.tempMax}
                  tempMin={this.state.tempMin}
                        />
<Footer weatherIcons = {this.weatherIcons}
                    tempFooter={this.state.tempFooter}
                    id = {this.state.id}/>

</div>
    );
  }
}
export default App;
