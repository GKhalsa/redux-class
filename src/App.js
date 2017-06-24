import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {connect} from 'react-redux';
import connect from './react-redux/connect/Connect';


export default class App extends Component {

  addOneToCounter(){
    this.props.store.dispatch({type: "INCREASE_COUNTER"});
  }

  subtractOneFromCounter(){
    this.props.store.dispatch({type: "DECREASE_COUNTER"});
  }

  render() {

    this.props.store.subscribe(() => {
      this.forceUpdate()
    })

    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
          <div>{this.props.store.getState().currentCount}</div>
          <button onClick={this.addOneToCounter.bind(this)}>add 1</button>
          <button onClick={this.subtractOneFromCounter.bind(this)}>subtract 1</button>
      </div>
    );
  }
}
