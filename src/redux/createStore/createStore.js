export default function createStore(reducer, preloadedState){
  let currentState = preloadedState;
  let listeners = [];

  function getState(){
    return currentState;
  }

  function dispatch(action){
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener){
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  }

}
