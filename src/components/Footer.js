import storm from "../img/weather-icons/snow.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import React ,{Component} from "react";




class Footer extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (

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
);
}
}
export default Footer
