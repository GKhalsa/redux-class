import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {connect} from 'react-redux';
import connect from './react-redux/connect/Connect';


class App extends Component {

  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
          <div>{this.props.count}</div>
          <button onClick={this.props.addOneToCounter}>add 1</button>
          <button onClick={this.props.subtractOneFromCounter}>subtract 1</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.currentCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOneToCounter: () => dispatch({type: "INCREASE_COUNTER"}),
    subtractOneFromCounter: () => dispatch({type: "DECREASE_COUNTER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
