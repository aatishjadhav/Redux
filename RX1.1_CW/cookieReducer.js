const inititalState = { value: 0 };

const cookieReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "cookies/added":
      return { value: state.value + 1 };

    case "cookies/removed":
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export default cookieReducer;
