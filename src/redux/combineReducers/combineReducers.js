export default function combineReducers(reducers){

  return function injectReducersToState(state = {}, action){
    const allReducerKeys = Object.keys(reducers);
    const nextState = {};
    allReducerKeys.forEach((key) => {
      const reducer = reducers[key];

      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    });

    return nextState;
  };
}
