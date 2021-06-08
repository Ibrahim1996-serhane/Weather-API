import React, { Component } from "react";


import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer"


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
      <div className="app">


<Head handleInput={this.handleInputChange} />
<Body  />
<Footer/>

</div>
    );
  }
}
export default App;
