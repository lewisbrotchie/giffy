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
      "https://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=" +
      key +
      "&rating=G";

    this.getImg(url);
  };

  random = () => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=6gRumwXlVtGsX5daPpTRluUUgmvngHi2&rating=G";

    this.getRandomImg(url);
  };

  trending = () => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=6gRumwXlVtGsX5daPpTRluUUgmvngHi2&limit=25&rating=G";

    this.getImg(url);
  };

  getRandomImg(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const img = data.data.images.fixed_height.url;
        this.setState(state => ({ ...state, img }));
      })
      .catch(e => console.log("fetch from API error - ", e));
  }

  getImg(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const img = data.data[0].images.fixed_height.url;
        this.setState(state => ({ ...state, term: "", img }));
      })
      .catch(e => console.log("fetch from API error - ", e));
  }

  render() {
    const h1Style = { paddingLeft: "1.5em", fontFamily: "Helvetica" };
    const buttonStyle = {
      padding: "0.5em",
      margin: "0.5em"
    };

    return (
      <div>
        <h1 style={h1Style}>giffy</h1>
        <div>
          <input value={this.state.search} onChange={this.onChange} />
        </div>
        <div>
          <button style={buttonStyle} onClick={this.trending}>
            Trending
          </button>
          <button style={buttonStyle} onClick={this.random}>
            Random
          </button>
        </div>
        <img src={this.state.img} height="200" alt={this.state.search} />
      </div>
    );
  }
}

export default App;
