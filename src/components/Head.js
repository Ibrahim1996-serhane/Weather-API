import React ,{Component} from "react";


class Head extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
        <div class="search">
          {this.state.input}
          <input 
          class="input"
            type="text"
            id="input-name"
            defaultValue="London"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
          />
          <button
          type="submit"
            onClick={event => {
              this.props.handleInput(this.state.input);
            }}
          >
            FIND WEATHER
          </button>
        </div>
      );
    }
  }
  export default Head