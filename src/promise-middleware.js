const isPromise = action => (
  action != null &&
  typeof action.then === 'function'
);

const promiseMiddleware = store => next => action => (
  isPromise(action)
    ? action.then(store.dispatch)
    : next(action)
);

export default promiseMiddleware;
