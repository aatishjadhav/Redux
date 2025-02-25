const loggerMiddleware = (state) => (next) => (action) => {
  console.log("Current State: ", state.getState());
  console.log("Action: ", action);
  next(action);
  console.log("New State: ", state.getState());
};

export default loggerMiddleware;
