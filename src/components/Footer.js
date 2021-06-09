
import React ,{Component} from "react";
import "../App";

class Footer extends React.Component {
    state = {
      input: "",
      
    };
  
    render() {
      return (

<div class="list">
{this.props.tempFooter.map(liste =>   
<div class="list-first">
  <span class ="sharifa">{liste.dt_txt}</span>
  <img src ={this.props.weatherIcons(liste.weather[0].id)}></img>
  <span class ="bob">{liste.main.temp}C</span></div>
  )}

</div>
);
}
}
export default Footer;
