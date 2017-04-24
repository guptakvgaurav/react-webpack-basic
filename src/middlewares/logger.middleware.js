const logger = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  next(action);
}

export default logger;