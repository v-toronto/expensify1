import { createStore } from 'redux'

// older syntax without destruction
const decrementCount = (payload = {}) => ({
  type: 'DECREMENT',
  decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
})

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const resetCount = (() => ({ type: 'RESET', count: 0 }))

const setCount = ((count) => ({ type: 'SET', count: count }))

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: action.count
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  };
}

const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount(101));