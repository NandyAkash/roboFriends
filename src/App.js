import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    //check the life cycle event happen
    console.log("constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    //check the life cycle event happen
    console.log("componentDidMount");
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterrobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    //check the life cycle event happen
    console.log("render");
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterrobot} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
