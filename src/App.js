import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
// import connect from './react-redux/connect/Connect';


class App extends Component {

  addOneToCounter(){
    this.props.dispatch({type: "INCREASE_COUNTER"});

  }

  subtractOneFromCounter(){
    this.props.dispatch({type: "DECREASE_COUNTER"});
  }

  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
          <div>{this.props.count}</div>
          <button onClick={this.addOneToCounter.bind(this)}>add 1</button>
          <button onClick={this.subtractOneFromCounter.bind(this)}>subtract 1</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.changeCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
