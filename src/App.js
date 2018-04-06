import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      img: ""
    };
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const api_key = "6gRumwXlVtGsX5daPpTRluUUgmvngHi2";
  };

  render() {
    return (
      <div>
        <h1>giffy</h1>
        <input value={this.state.search} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
