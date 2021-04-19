const init_value = {
  counter: 0,
};

export const counterReducer = (state = init_value, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + action.add_plus };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - action.add_minus };
  } else {
    return state;
  }
};
