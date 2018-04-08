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
    const search = e.target.value;
    this.setState(state => ({ ...state, search }));

    const key = "6gRumwXlVtGsX5daPpTRluUUgmvngHi2";
    const url =
      "http://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=" +
      key +
      "&rating=G";

    this.getImg(url);

    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     const img = data.data[0].images.fixed_height.url;
    //     this.setState(state => ({
    //       ...state,
    //       term: "",
    //       img
    //     }));
    //   })
    //   .catch(e => console.log("fetch from API error", e));
  };

  getImg(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const img = data.data[0].images.fixed_height.url;
        this.setState(state => ({ ...state, term: "", img }));
      })
      .catch(e => console.log("fetch from API error", e));
  }

  render() {
    return (
      <div>
        <h1>giffy</h1>
        <input value={this.state.search} onChange={this.onChange} />
        <br />
        <img src={this.state.img} height="200" alt={this.state.search} />
      </div>
    );
  }
}

export default App;
