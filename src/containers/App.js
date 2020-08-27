import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";
import Scroll from "../components/Scroll";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterrobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterrobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
