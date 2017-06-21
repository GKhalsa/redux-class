import expect from 'expect';
import createStore from './createStore';
import sinon from 'sinon';
import combineReducers from '../combineReducers/combineReducers'

describe('createStore', () => {

  const currentCount = (state = 0, action) => {
    switch(action.type){
      case "INCREASE_COUNTER":
        return state + 1;
      case "DECREASE_COUNTER":
        return state -1;
      default:
        return state;
    }
  }

  const currentWord = (state = "", action) => {
    switch(action.type){
      case "CHANGE_WORD":
        return action.newWord;
      default:
        return state;
    }
  }

  const increaseCounter = {type: "INCREASE_COUNTER"}
  const decreaseCounter = {type: "DECREASE_COUNTER"}

  const changeWord = (word) => {
    return {type: "CHANGE_WORD", newWord: word}
  }

  let store;
  beforeEach(() => {
    store = createStore(currentCount, 0)
  });

  it.skip('sets initial state', () => {
    expect(store.getState()).toBe(0);
  });

  it.skip('applies the reducer to the previous state', () => {
    store.dispatch(increaseCounter);
    expect(store.getState()).toBe(1)
    store.dispatch(decreaseCounter);
    expect(store.getState()).toBe(0)
  });

  it.skip('can fire off subscribed listeners on state change', () => {
    let callback = sinon.spy()
    expect(callback.callCount).toBe(0)

    store.subscribe(callback);
    store.dispatch(increaseCounter)
    expect(callback.callCount).toBe(1)
  });

  it.skip('accepts a combined reducer', () => {
    const store = createStore(combineReducers({currentCount, currentWord}));
    store.dispatch(increaseCounter);
    store.dispatch(changeWord("helloWorld"));
    expect(store.getState().currentCount).toBe(1)
    expect(store.getState().currentWord).toBe("helloWorld")
  });

});
